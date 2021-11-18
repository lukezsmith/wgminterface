import type { NextPage } from "next";
import Head from "next/head";
import VanillaTilt from "vanilla-tilt";
import React, { useEffect } from "react";
// import { HorizontalTicker } from "react-infinite-ticker";
import Marquee from "react-fast-marquee";

const Home: NextPage = () => {
  // Get all tilt elements

  useEffect(() => {
    let tiltElement = document.getElementsByClassName("card")[0] as HTMLElement;

    // add tiltChange event listener to them and change --angle value based on tilt details

    holoEffect(tiltElement);

    function holoEffect(tiltElement: Element) {
      tiltElement.addEventListener("tiltChange", function (event) {
        let angle =
          // @ts-ignore: Unreachable code error
          parseInt(event.detail.tiltY, 10) + parseInt(event.detail.tiltX, 10);
        // @ts-ignore: Unreachable code error
        tiltElement.style.setProperty("--angle", angle + "deg");
      });
    }

    VanillaTilt.init(tiltElement, {
      scale: 1.1,
      gyroscope: true,
      speed: 800,
      perspective: 1000,
      glare: true,
      "max-glare": 0.1,
      gyroscopeMinAngleX: -5, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
      gyroscopeMaxAngleX: 5, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
      gyroscopeMinAngleY: -5, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
      gyroscopeMaxAngleY: 5,
      "mouse-event-element": "main",
    });
  });

  return (
    <div className="bg-white">
      <Head>
        <title>WGMInterfaces</title>
        <meta name="description" content="WGMInterfaces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Marquee className="bg-black h-10" gradient={false}>
        <div className="text-white">
      <p>WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> WGMInterfaces <span className="mx-5">◕ ◡ ◕</span> </p>
      </div>
      </Marquee>

      <main
        id="main"
        className="py-32  sm:py-32 md:py-32 xl:py-40 lg:mx-80  xl:mx-96 2xl:mx-96 flex flex-col h-screen overflow-hidden select-none"
      >
        <div
          className="mx-16 sm:mx-40 md:mx-72 lg:mx-64 xl:mx-44 2xl:mx-96 my-auto"
          id="grid"
        >
          <div data-tilt-full-page-listening className="card brand">
            <div className="card-content flex flex-col">
              <img className="w-32 xl:w-64" src="logo.svg" />
              <div className="brand-label invisible sm:visible ">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 300 300"
                  aria-hidden="true"
                  height="500"
                  width="500"
                >
                  <defs>
                    <path id="a" d="M90 150a60 60 0 01120 0 60 60 0 01-120 0" />
                  </defs>
                  <use xlinkHref="#a" fill="none" />
                  <text shapeRendering=" crispEdges ">
                    <textPath xlinkHref="#a">
                      WGMInterfaces ◕◡◕ WGMInterfaces ◕◡◕ WGMInterfaces ◕◡◕
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
          <img id="wagmi"  className="pt-28 2xl:pt-40 mx-8 sm:mx-32 md:mx-52 lg:mx-32 2xl:mx-80" src="wgmi2.svg" />
      </main>
    </div>
  );
};

export default Home;
