/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import PageHeader from "./PageHeader";
import QuienSoy from "./QuienSoy";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function Example(props) {
  const t = useTranslations("index.features");

  const features = ["bungalow", "beds", "food", "mosquito", "kitchen", "price"];

  const title = "Nature & Mind";
  const pricing = "Pricing";
  const guide = "Guide";
  const location = "Location";

  const title1 = "Traditional 5 Day Retreat";
  const subtitle1 =
    "Retreats have a 10 person capacity and are held constalty year round. Visits during both dry and rainy season are highly recommended, the jungle is always magical.";

  const included = "What`s included";
  const price = "Cost & Price";

  const getSchedule = "Get the schedule";
  const donations = "Donations are welcomed";
  const sample = "Get a free sample";

  return (
    <div className="bg-green-600">
      <PageHeader title={title} />
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-green-600" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <QuienSoy />
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  {price}
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>$240</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">
                    USD
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    {donations}
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      {getSchedule}
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    {sample}
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
