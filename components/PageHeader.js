/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Example(props) {
  const t = useTranslations("index.features");

  const pricing = "Pricing";
  const guide = "Guide";
  const location = "Location";

  return (
    <div className="pt-12 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-white font-extrabold  sm:text-4xl lg:text-5xl">
            {props.title}
          </h2>
          <p className="mt-4 text-xl text-green-100 max-w-2xl mx-auto">
            <Link href="/price">
              <a className="mr-2">{pricing}</a>
            </Link>
            <Link href="/guide">
              <a className="mr-2">{guide}</a>
            </Link>
            <Link href="/location">
              <a>{location}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
