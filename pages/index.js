import Head from "next/head";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Hero from "../components/Hero";
import FeatureTextLeft from "../components/FeatureTextLeft";

export default function Home() {
  return (
    <>
      <Hero logo={"./terra.png"} title={"Check your LUNAtic score now"} />
      <FeatureTextLeft
        header={"Crazy scores"}
        description={
          "LUNAtic scoring features no upper limit for maximum lunacy."
        }
      />
    </>
  );
}
