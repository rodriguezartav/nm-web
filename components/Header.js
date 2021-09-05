import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useTranslations } from "next-intl";

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  main: [{ name: "Roberto Rodriguez Artavia", href: "#" }],
  social: [
    {
      name: "Facebook",
      href: "#",
    },
    {
      name: "Instagram",
      href: "#",
    },
    {
      name: "Twitter",
      href: "#",
    },
    {
      name: "GitHub",
      href: "#",
    },
    {
      name: "Dribbble",
      href: "#",
    },
  ],
};

export default function Example() {
  const t = useTranslations("index.header");
  return (
    <header className="bg-white mb-10 mt-10">
      <div className=" max-w-7xl mx-auto pt-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2 flex">
            <a className="leading-10 text-green-600 pr-4 text-3xl  hover:text-gray-900">
              {t("title")}
            </a>

            <div
              className="bg-gray-500 mt-2 ml-5 mr-5"
              style={{ width: 1, height: 30 }}
            />
            <div className="mt-1">
              <Dropdown />
            </div>
          </div>
        </nav>

        <div
          className="border-1 w-24 mt-12 mb-4 border mx-auto bg-green-600"
          style={{ height: 3 }}
        ></div>
      </div>
    </header>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown() {
  return (
    <Menu as="div" className=" mb-10 relative inline-block text-left text-base">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500">
              EN / ES
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/en"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      English
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/es"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Español
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
