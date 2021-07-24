/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Example() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  It`s about the moment
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  The greatest gift is a moment to experience life as it really
                  is, before its distorted by our humanity. Sit down on a creek,
                  swim deep in the ocean or walk between trees and forget about
                  your temporary existance.
                </p>

                <p className="mt-10 mb-10 text-green-500 text-3xl border-t pt-8">
                  to look, feel and breath with your heart
                </p>

                <div className="mt-6"></div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <p className="mt-4 text-lg text-gray-500">
                  That moment is a universal right that every living being has,
                  and we are all able to reach it by ourselfs.
                </p>
                <footer className="mt-3">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0"></div>
                  </div>
                </footer>

                <div></div>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                width="500"
                height="600"
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-green-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Nature and Mind
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  A space born of our love and blesses by our teachers for you
                  to practice connecting with nature.
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  At the beginning, there is a brief period of silence
                  customized for each person. Plenty of caring and help for
                  those in trouble. Nothing is mandatory.
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  We have a mystic version of the Scandinavian sauna called a
                  temazcal. Natural meditations on the jungle, creeks, ocean and
                  bonefires that become effortless when mixed with silence.
                  Amazing hikes, playing in the ocean, walking on the beach. You
                  will be sweating, muddy, salty and wet - your inner child will
                  love it.
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  Most importantly you’ll be surrounded day and nighty by the
                  most abundant density of live found anywhere on earth. We have
                  heard from countless cultures, our teachers and from mother
                  herself that nature is eager to welcome you back into her
                  arms.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                width="500"
                height="600"
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
