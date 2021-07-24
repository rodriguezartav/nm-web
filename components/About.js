/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Tecnología",
    icon: CloudUploadIcon,
    description:
      "Siempre basado en casos reales, descubrimos como se aplica HOY el software a los problemas sociales y comerciales en un lenguaje para lideres y tomadores de decisiones",
  },
  {
    name: "Organizacion",
    icon: LockClosedIcon,
    description:
      "La transformación de la administración empírica en organizaciones profesionales que toman decisiones basadas en datos es un requisto indispensable para alcanzar ROI en tecnología.",
  },
  {
    name: "Visión",
    icon: LockClosedIcon,
    description:
      "El mercadeo big-tech, los influencers y medios de comunicación tienen su proposito. Atravezemos estas cortinas de humo y entienda por su cuenta lo sencillo que es todo ahora",
  },
];

export default function About() {
  return (
    <div className="relative mt-12 mb-24 bg-white pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          resumidamente
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          De de que se trata esto?
        </p>

        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          He tenido la suerte de colaborar con las empresas mas efectivas del
          mundo
          <br /> En el éxito de todas ellas hay un comun denominador.
        </p>

        <div className="mt-6">
          <div className="py-12 bg-white">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">A better way to send money.</h2>
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-14">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <p className="mt-5 text-2xl leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 text-lg   text-center text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
