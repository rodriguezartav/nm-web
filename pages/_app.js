import { NextIntlProvider } from "next-intl";
import NextApp from "next/app";
import useSWR, { SWRConfig } from "swr";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </NextIntlProvider>
  );
}

MyApp.getInitialProps = async function getInitialProps(context) {
  const { locale } = context.router;
  return {
    ...(await NextApp.getInitialProps(context)),
    messages: require(`../messages/${locale}.json`),
  };
};

export default MyApp;
