/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function Example(props) {
  const t = useTranslations("index.features");

  const features = ["beds", "food", "bungalow", "mosquito", "kitchen", "price"];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{t("subtitle")}</p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  {t("list." + feature)}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {t("list." + feature + "_d")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
