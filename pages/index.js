import { useState } from "react";
import Head from "next/head";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Header from "../components/Header";
import Hero from "../components/Hero3";
import Footer from "../components/Footer";
import Script from "next/script";
import Register from "../components/Register";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index(props) {
  const [open, setOpen] = useState(false);

  function onRegister() {
    setOpen(true);
  }

  return (
    <div className="bg-white">
      <Head>
        <title>Nature and Mind</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="An open minded retreat to enjoy your connection with nature with fun activities to disconnect from your every day and give your mind a rest with bungalows located on a pristine beachfront property with primary forest on the last unspoiled region of Costa Rica"
        />
        <link rel="icon" href="/favicon.ico" />
        <Script>
          {`
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="yO0nmRVb5IHLXhD7IHlxonMqzZJDFu9Q";;analytics.SNIPPET_VERSION="4.15.3";
        analytics.load("yO0nmRVb5IHLXhD7IHlxonMqzZJDFu9Q");
        analytics.page();
        }}();
        `}
        </Script>
      </Head>

      <main className="">
        <Header />
        <Hero onRegister={onRegister} />
      </main>
      <Footer />
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/${locale}.json`),
      },
    },
  };
}
