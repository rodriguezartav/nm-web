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
                  He tenido la suerte de colaborar con las empresas mas
                  efectivas del mundo
                </h2>
                <p className="text-indigo-600 text-md">
                  {" "}
                  En el éxito de todas ellas hay un comun denominador
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Mi objetivo es servir de guia para todo tipo de personas,
                  llevarlos desde donde esten hasta el momento actual de la
                  industria del software comercial y gubernamental en Estados
                  Unidos.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0"></div>
                    <div className="text-base font-medium text-gray-700">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full pt-10">
              <iframe
                src="https://prezi.com/v/embed/uf7xlwfloc8x/"
                id="iframe_container"
                frameBorder="0"
                webkitallowFullScreen=""
                mozallowFullScreen=""
                allowFullScreen=""
                allow="autoplay; fullscreen"
                height="500"
                width="889"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Cada clase un caso sobre el uso exitoso de tecnologia en una
                  organización
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Descartamos todo lo superfluo, trillado y engorroso hasta
                  llegar a la fuente clara de como esa organización lo logro.
                  Vemos sobre todo el factor humano, los proveedores y la
                  arquitectura de la solución de una forma que cualquiera puede
                  entender.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Cada clase tendra mas claro cual debe ser el camino a tomar en
                  su organización y en el conversatorio posterior podemos
                  planear como ir sembrando las verdaderas semillas de la
                  innovación.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
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
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
