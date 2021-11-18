import type { NextPage } from "next";
import Head from "next/head";
import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import icon from "../public/logo.svg";
import VanillaTilt from "vanilla-tilt";
import React, { ReactFragment, useEffect } from "react";

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
    };
    
    VanillaTilt.init(tiltElement, {
      scale: 1.1,
      gyroscope: true,
      speed: 800,
      perspective: 1000,
      glare: true,
      gyroscopeMinAngleX:     -10,     // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    gyroscopeMaxAngleX:    10,      // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
    gyroscopeMinAngleY:     -10,     // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    gyroscopeMaxAngleY:     10,   
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

      <main id="main" className="py-64  sm:py-40 md:py-32 xl:py-40 lg:mx-80  xl:mx-96 flex h-screen overflow-y-hidden">
        <div className="mx-20 md:mx-80 xl:mx-40 " id="grid">
          <div data-tilt-full-page-listening className="card">
            <div className="card-content flex flex-col">
              <img className="w-32 xl:w-40" src="logo.svg"/>
              <img className="mx-16" src="wgmi.svg" />
            </div>
          </div>
          <div className="m-auto mt-10 text-black">
            <p className="text-2xl">wgmiOS</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                <div
                  id="progress"
                  className="
                    shadow-none
                    flex flex-col
                    text-center
                    whitespace-nowrap
                    text-white
                    justify-center
                    bg-purple-500
                  "
                ></div>
              </div>
              <div className="text-center mt-10">
                <p className="text-md">Coming soon....</p>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
