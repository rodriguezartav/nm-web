/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
const title = "This is Nature & Mind";
const subtitle =
  " The greatest gift from nature is a moment to experience life as it really is, before its distorted by our beautiful, yet troubled, humanity";

const subtitle11 = "no dogma, no gurus, no drugs, let nature be your guide";

const title1 = "Let mother nature be our guide";

const subtitle1 =
  "An open minded retreat to enhance your connection with nature with optional activities to disconnect from your every day and give your mind a rest.";

const title2 = "Lets go back, we forgot something";
const subtitle2 =
  "We heard from countless cultures, teachers and from mother herself that nature is eager to welcome us back";

const transferFeatures = [
  {
    id: 1,
    name: "Natural Meditations & Relaxation",
    description:
      "Our included activities use the jungle, creeks, ocean, bonefires and the present natural moment to achieve relaxation and optionally practice meditation",
    icon: GlobeAltIcon,
  },
  {
    id: 3,
    name: "Temazcal Detox",
    description:
      "Our own version of the Scandinavian sauna mixed with the native american Temazcal helps detoxify the body while getting you closer to the earth and getting rid of that anxiety for confort that dwarfs peace & connection.",
    icon: LightningBoltIcon,
  },

  {
    id: 2,
    name: "Bring you inner child",
    description:
      "Walk among giant trees glowing with life, play in the ocean, walk on the beach, take mud bath on the creek. We'll have you sweating, muddy, salty and happy.",
    icon: ScaleIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Tips and Ideas - nothing is mandatory*",
    description:
      "During your time in the retreat we provide simple not dogmatic  recommendations that are in constant evolution. There is no schedule, we wake up feel the day and decide what to do ( within our code of conduct )",
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: "We choose love",
    description:
      "We have experienced the ancestral masculine way of mental disipline, unquestionable religious loyalty and consiounsess bending sacred plants. But we live in really hard and confusing times, so we choose the motherly love of nature as our inspiration. I don't know about you but I need a hug, not to be schooled.",
    icon: MailIcon,
  },
];

export default function Example() {
  return (
    <div className=" bg-green-500 overflow-hidden  pb-10 ">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-3 text-lg text-justify text-gray-50">{subtitle1}</p>
      </div>

      <div className="relative bg-white p-5 mt-5">
        <div className="bg-white relative mt-2 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <h2 className="mt-3 text-center uppercase text-2xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
            {title}
          </h2>
          <p className="text-gray-500 text-center mx-14">{subtitle11}</p>
          <div className="relative">
            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="relative mt-10 p-7 mb-5 bg-gray-100  max-w-xl mx-auto    lg:max-w-7xl">
          <p className=" mb-10 text-lg text-justify text-gray-500">
            {subtitle}
          </p>
        </div>
      </div>

      <div className=" max-w-sm mx-auto sm:max-w-none sm:max-w-xl sm:justify-center">
        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
          <div className="flex  items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm cursor-pointer text-white bg-green-600    sm:px-8">
            Is this for you?
          </div>
        </div>

        <Name />

        <div className=" space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
          <Link href="/price">
            <div className="flex mx-10 items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm cursor-pointer text-green-800 bg-white  hover:bg-green-500 sm:px-8">
              Continue
            </div>
          </Link>
        </div>
        <p className="max-w-xl text-white text-center">
          <small>Our privacy policy is honorable</small>
        </p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="p-10 pb-5">
      <label htmlFor="email" className="block text-sm font-medium text-gray-50">
        Email
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="email"
          id="email"
          className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
      </div>
    </div>
  );
}
