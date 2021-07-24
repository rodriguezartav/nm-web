import React from "react";
import useSWR, { mutate } from "swr";

export default function Example() {
  const [phone, setPhone] = React.useState("");

  const [registerResultStatus, setRegisterResultStatus] = React.useState(0);

  async function onRegister(e) {
    setRegisterResultStatus(-1);
    // send a request to the API to update the source
    const updatedTodo = await fetch("/students/register", {
      method: "POST",
      body: JSON.stringify({ phone: phone }),
    });

    if (updatedTodo.status == 200) return setRegisterResultStatus(1);
    else if (updatedTodo.status == 400) {
      setTimeout(() => {
        return setRegisterResultStatus(0);
      }, 3000);
      return setRegisterResultStatus(2);
    } else if (updatedTodo.status > 400) {
      setTimeout(() => {
        return setRegisterResultStatus(0);
      }, 3000);
      return setRegisterResultStatus(3);
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Let us share it with you
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            We will send you videos, images, news and schedules to keep you
            connected to us.
          </p>
        </div>

        {registerResultStatus == 1 && (
          <p className="mt-3 text-2xl max-w-sm text-center text-white border-2 p-3 bg-green-500">
            Listo, le llegara un whatsapp todas las semanas
          </p>
        )}

        {registerResultStatus == 2 && (
          <p className="mt-3 text-lg max-w-sm text-center text-white border-2 p-3 bg-red-500">
            Error
            <br />
            Asegurese de ingresar su numero sin espacios empezando con +506 ( o
            el codigo de area de su pais)
          </p>
        )}

        {registerResultStatus == 3 && (
          <p className="mt-3 text-lg max-w-sm text-center text-white border-2 p-3 bg-red-500">
            Error
            <br />
            Ocurrio un error en el servidor, favor intente mas tarde o envienos
            un whatspp al {process.env.NEXT_PUBLIC_PHONE_NUMBER}
          </p>
        )}

        {registerResultStatus == 0 && (
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <div className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Telefono Celular
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
                name="phone"
                type="text"
                autoComplete="phone"
                required
                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:max-w-xs rounded-md"
                placeholder="Enter your phone"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  onClick={onRegister}
                  className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Sus datos quedan protegidos{" "}
              <a href="#" className="font-medium underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
