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
import Hero from "../components/Hero";
import QuienSoy from "../components/QuienSoy";
import About from "../components/About";

import Process from "../components/Process";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Retreat from "../components/Retreat2";
import Price from "../components/Price";

import Launch from "../components/Launch";

import Testimonial from "../components/Testimonial";

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
        <title>Nature & Mind</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register open={open} setOpen={setOpen} />
      <main>
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
