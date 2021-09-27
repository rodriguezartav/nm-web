import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import SignIn from "../components/SignIn";

import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export default function Hero(props) {
  const router = useRouter();

  const t = useTranslations("index.hero");
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/step1");
  };
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative sm:overflow-hidden">
          <div className="relative px-4  sm:px-6 sm:pb-10 lg:px-8">
            <h1 className="text-center mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className=" text-gray-800">
                <span className="text-green-600  text-4xl sm:text-6xl">
                  {t("title")}
                </span>
                <br />
                <span className="text-green-600 text-4xl  sm:text-6xl mb-10">
                  {t("titleColored")}
                </span>
              </span>
            </h1>

            <p className="my-6 max-w-lg mx-auto text-center text-lg text-gray-600 sm:max-w-xl">
              Bungalows located on a pristine beachfront property with primary
              forest on the last unspoiled region of Costa Rica
            </p>

            <Image
              className=" sm:absolute sm:-top-96 h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="/back.jpeg"
              width="2000"
              height="1000"
              alt="Picture of the author"
            />
          </div>

          <div className="bg-green-500 overflow-hidden pb-4 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-4xl">
            <p className="mt-3 text-lg text-center text-gray-50">{subtitle1}</p>
          </div>

          <div className="relative bg-white p-5 mt-5">
            <div className="bg-white relative mt-2 lg:my-8  lg:items-center">
              <h2 className="mt-3 text-center uppercase text-2xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
                {title}
              </h2>
              <p className="text-gray-500 text-center mx-14">{subtitle11}</p>
              <div className="relative max-w-2xl mx-auto">
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

            <div className="relative mt-10 p-7 mb-5 bg-gray-100  max-w-xl mx-auto lg:max-w-2xl">
              <p className="text-lg text-justify text-gray-500 mb-10">
                For some, {"there's"} a stage in life when the search for long
                lasting peace takes precendence over all kinds of substances,
                desires, ambitions, experiences and even mental concepts of
                spirituality.
              </p>

              <p className=" mb-1 text-lg text-justify text-gray-500">
                May this space and everything on it be of service to those
                beings.
              </p>
            </div>

            <div className="w-48 mx-auto mt-5 ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/rober.nm.cr"
                className="text-gray-400 flex  hover:text-gray-500"
              >
                <span className="">meet me</span>
                <svg
                  className="h-6 w-6 flex-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillrule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    cliprule="evenodd"
                  />
                </svg>
                <span className="flex-1">rober.nm.cr</span>
              </a>
            </div>
          </div>

          <div className=" max-w-sm mx-auto pb-10 sm:max-w-xl sm:justify-center mt-10 border-2  border-green-500">
            <div className="bg-green-500 p-4 text-white text-lg">
              Nature and Mind is donation based, no fixed prices.
            </div>

            <iframe
              className="w-full h-96"
              src="https://cdn.forms-content.sg-form.com/ad28567a-1e67-11ec-b830-c200a5ba8227"
            ></iframe>

            <small className="ml-20 text-gray-600 text-center">
              {"We won't flood or share your email with third parties."}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

const title = "This is Nature & Mind";
const subtitle =
  "The greatest gift from nature is a moment to experience life as it really is, before its distorted by our beautiful, yet troubled, humanity";

const subtitle11 = "no dogma, no gurus, no drugs, let nature be your guide";

const title1 = "Let mother nature be our guide";

const subtitle1 =
  "An open minded retreat to enjoy your connection with nature with fun & fulfilling activities to disconnect from your every day and give your mind a rest.";

const title2 = "Lets go back, we forgot something";
const subtitle2 =
  "We heard from countless cultures, teachers and from mother herself that nature is eager to welcome us back";

const transferFeatures = [
  {
    id: 2,
    name: "Spend all the time in the jungle paradise",
    description:
      "Walk among giant trees glowing with life, be surprised by the most beautiful birds and butterflies, see the monkeys fly on the most biodiverse place on earth",
    icon: ScaleIcon,
  },
  {
    id: 2,
    name: "Bring you inner child",
    description:
      "Play, float or surf in the ocean, walk on an empty beach, take mud baths on the creek or simply hit the hammock and smile",
    icon: ScaleIcon,
  },
  {
    id: 1,
    name: "Effortless Relaxation & Meditations",
    description:
      "Activities are included and use the unique and present moment of nature with her sunlight, trees, wildlife, rain, wind, creeks, ocean and bonefires to achieve relaxation and optionally practice effortless meditation in our beach or jungle temples",
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
    id: 4,
    name: "Jungle Bungalows + Good Food",
    description:
      "Individual rooms with bathroom inmersed in the jungle with premium quality beds and linens. Three healthy traditional meals, fruit juices, coffee and te included and served on the beach lounge",
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

function Name() {
  return (
    <div className="p-10 pb-5">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-500"
      >
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
