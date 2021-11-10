import { useRouter } from "next/router";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
const Hero = (props) => {
  let [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchUser = (event) => {
    event.preventDefault();
    router.push("/address/" + event.target.address.value);
  };
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <img className="h-11 w-auto" src={props.logo} />
            </div>
            <div className="mt-12">
              <div>
                <a href="#" className="inline-flex space-x-4">
                  <span className="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                    What's new
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-indigo-600 space-x-1">
                    <span>Just shipped version 0.1.0</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  {props.title}
                </h1>
                <p className="mt-6 text-lg text-gray-500">
                  Find out how crazy you are based on your participation in the
                  Terra ecosystem.
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  searchUser(e);
                  setLoading(true);
                }}
                className="mt-12 sm:max-w-lg sm:w-full sm:flex"
              >
                <div className="min-w-0 flex-1">
                  <label className="sr-only">Terra address</label>
                  <input
                    type="string"
                    className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter your Terra address"
                    name="address"
                    required
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                  >
                    {loading && (
                      <svg
                        className="z-2 animate-spin h-5 w-5 mr-3 text-white"
                        viewBox="0 0 24 24"
                      ></svg>
                    )}
                    {!loading && <span>Go</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
            </div>
            <div className="relative pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="mx-auto w-1/3 lg:w-2/3 rounded-md  lg:h-full "
                src="./terra.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
