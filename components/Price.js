/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function Example(props) {
  const t = useTranslations("index.features");

  const features = ["beds", "food", "bungalow", "mosquito", "kitchen", "price"];

  return (
    <div className="bg-green-600">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl text-white font-extrabold  sm:text-4xl lg:text-5xl">
              Pricing & Schedule
            </h2>
            <p className="mt-4 text-xl text-green-100 max-w-2xl mx-auto">
              Nature & Mind retreats are profitless, our financial goal is to
              break even at the end of each year while providing a fair price
              for everyone
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-green-600" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Traditional 5 Day Retreat
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  Retreats have a 10 person capacity and are held constalty year
                  round. Visits during both dry and rainy season are highly
                  recommended.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-green-600">
                      What`s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          {" "}
                          {t("list." + feature)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Cost & Price
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>$240</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">
                    USD
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Donations are welcomed
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Get the schedule
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    Get a free sample{" "}
                    <span className="font-normal text-gray-500">(20MB)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
