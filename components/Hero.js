import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import SignIn from "../components/SignIn";

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

            <p className="my-6 max-w-lg mx-auto text-center text-md text-gray-600 sm:max-w-3xl">
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

          <SignIn />
        </div>
      </div>
    </div>
  );
}
