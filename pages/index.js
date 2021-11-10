import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head></Head>
      <Hero
        logo={"/terra.png"}
        title={"Check your LUNAtic score now"}
        search={"/address/"}
      />
    </>
  );
}
