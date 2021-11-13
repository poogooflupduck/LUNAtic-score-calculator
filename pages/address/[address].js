import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Address(props) {
  return (
    <div>
      <Navbar logo={"/terra.png"} />
      <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="">
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-3xl font-extrabold break-words">
                    {props.address}
                  </h1>
                  <p className="mt-6 text-lg text-gray-500">
                    Your LUNAtic score is based on the components below.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl">
            <div className="py-12 sm:relative sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative">
                <div className="lg:mt-24 mx-auto text-center">
                  <span className="rounded bg-indigo-50 px-4 py-2 text-3xl font-semibold text-indigo-600 tracking-wide uppercase">
                    {props.score}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-800">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <div className="w-full h-full flex items-center justify-center">
            {" "}
            <p className="mt-3 text-4xl text-gray-300">
              {props.lunaStakedAmount}
            </p>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Amount staked
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              LUNA staking score
            </p>

            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link href="https://station.terra.money/staking">
                  <a
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                    Stake LUNA
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-800 border-t border-black">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <div className="w-full h-full flex items-center justify-center">
            {" "}
            <p className="mt-3 text-4xl text-gray-300">
              {props.anchorUstDepositCounts}
            </p>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              No. of deposits
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Anchor UST deposit score
            </p>

            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link href="https://app.anchorprotocol.com/earn">
                  <a
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                    Deposit UST on Anchor
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-800 border-t border-black">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <div className="w-full h-full flex items-center justify-center">
            {" "}
            <p className="mt-3 text-4xl text-gray-300">
              {props.anchorAncStakingCounts}
            </p>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              No. of deposits
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Anchor ANC staking score
            </p>

            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link href="https://app.anchorprotocol.com/gov">
                  <a
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                    Stake ANC on Anchor
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-800 border-t border-black">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <div className="w-full h-full flex items-center justify-center">
            {" "}
            <p className="mt-3 text-4xl text-gray-300">
              {props.terraVotesCounts}
            </p>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              No. of votes
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Terra governance voting score
            </p>

            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link href="https://station.terra.money/governance">
                  <a
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                    Vote on Terra Station
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-800 border-t border-black">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <div className="w-full h-full flex items-center justify-center">
            {" "}
            <p className="mt-3 text-4xl text-gray-300">
              {props.pylonPoolDepositCounts}
            </p>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              No. of deposits
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Pylon pool deposits score
            </p>

            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link href="https://gateway.pylon.money/">
                  <a
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                    Deposit into a Pylon pool
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const address = params.address;
  function searchAddress(entry) {
    return entry.ADDRESS == params.address;
  }
  async function getAmountScore(r) {
    const amountData = await r.json();
    if (amountData.filter(searchAddress).length > 0) {
      return amountData.filter(searchAddress)[0]["AMOUNT"];
    } else {
      return 0;
    }
  }
  async function getCountScore(r) {
    const countData = await r.json();
    if (countData.filter(searchAddress).length > 0) {
      return countData.filter(searchAddress)[0]["COUNT"];
    } else {
      return 0;
    }
  }
  const [
    lunaStakedAmount,
    anchorUstDepositCounts,
    anchorAncStakingCounts,
    terraVotesCounts,
    pylonPoolDepositCounts,
  ] = await Promise.all([
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/663f6b3b-d6c8-4957-ba9c-ed5a74ab717d/data/latest`
    ).then((r) => getAmountScore(r)),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/93247971-5bcd-43c4-9542-095f8a12db1e/data/latest`
    ).then((r) => getCountScore(r)),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/d9120881-c198-4339-bf9c-682a47059d6f/data/latest`
    ).then((r) => getCountScore(r)),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/f0cf0d93-d5a9-4f0f-be17-ba2e37f5a4e3/data/latest`
    ).then((r) => getCountScore(r)),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/87724d52-076b-4e1a-98ef-8cd5db303ded/data/latest`
    ).then((r) => getCountScore(r)),
  ]);

  const score = Math.round(
    lunaStakedAmount +
      anchorUstDepositCounts +
      anchorAncStakingCounts +
      terraVotesCounts +
      pylonPoolDepositCounts
  );
  return {
    props: {
      address,
      lunaStakedAmount,
      anchorUstDepositCounts,
      anchorAncStakingCounts,
      terraVotesCounts,
      pylonPoolDepositCounts,
      score,
    },
    revalidate: 60 * 5,
  };
}
export async function getStaticPaths() {
  // Render a major list of 1000 addresses first (from LUNA stakers)
  // Then render any other ones requested at runtime
  const lunaStakers = await fetch(
    `https://api.flipsidecrypto.com/api/v2/queries/663f6b3b-d6c8-4957-ba9c-ed5a74ab717d/data/latest`
  ).then((r) => r.json());
  const paths = lunaStakers.slice(0, 1000).map((entry) => ({
    params: { address: entry.ADDRESS },
  }));

  return { paths, fallback: "blocking" };
}
