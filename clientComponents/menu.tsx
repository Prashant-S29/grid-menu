"use client";

import { imageFour, imageOne, imageThree, imageTwo } from "@/public";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MENU = () => {
  const router = useRouter();
  const [showMenuWidget, setShowMenuWidget] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuLinks, setShowMenuLinks] = useState(false);
  const [showMenuLinkBackground, setShowMenuLinkBackground] = useState(-1);

  const [showInfoBox, setShowInfoBox] = useState(false);
  const [infoBoxPositition, setInfoBoxPositition] = useState({ x: 0, y: 0 });
  const [infoBoxContent, setInfoBoxContent] = useState(0);

  const navLinks = ["", "about", "services", "projects"];

  useEffect(() => {
    const setMousePosition = (e: any) => {
      setInfoBoxPositition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setMousePosition);

    return () => {
      window.removeEventListener("mousemove", setMousePosition);
    };
  }, []);

  const handleMenuShow = () => {
    if (showMenuWidget) {
      setShowMenuLinks(false);
      setTimeout(() => {
        setShowMenu(false);
      }, 650);
      setTimeout(() => {
        setShowMenuWidget(false);
      }, 800);

      return;
    }

    setShowMenuWidget(true);
    setTimeout(() => {
      setShowMenu(true);
    }, 750);
    setTimeout(() => {
      setShowMenuLinks(true);
    }, 800);
    setShowMenuLinkBackground(-1);
  };

  return (
    <>
      {Array(5)
        .fill("")
        .map((value, index) => (
          <div
            key={index}
            className={`w-[20%] absolute z-30  min-h-screen ease-out bg-white ${
              showMenuWidget ? "top-0" : "-top-[100%]"
            }`}
            style={{
              transitionDuration: `${index * 110 + 200}ms`,
              left: `${index * 20}%`,
            }}
          ></div>
        ))}

      <div
        className={`w-full absolute z-40 overflow-hidden delay-700 min-h-screen flex justify-center items-center ease-out p-[50px]  ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <div
          className="w-full cursor-none"
          onMouseEnter={() => {
            setShowInfoBox(true);
          }}
          onMouseLeave={() => {
            setShowInfoBox(false);
          }}
        >
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="w-full border-b relative h-[40px] sm:h-[55px] md:h-[70px] lg:h-[80px] overflow-hidden last:border-none  "
            >
              <div
                className="duration-300"
                style={{
                  transform: `${
                    showMenuLinks ? "translateY(0px)" : "translateY(80px)"
                  }`,
                  transitionDelay: `${
                    showMenuLinks ? `${100 * index}ms` : `${100}ms`
                  }`,
                }}
                onMouseEnter={() => {
                  setShowMenuLinkBackground(index);
                  setInfoBoxContent(index);
                }}
                onMouseLeave={() => {
                  setShowMenuLinkBackground(-1);
                }}
                onClick={() => {
                  setShowMenuLinkBackground(-1);
                  setShowInfoBox(false);
                  handleMenuShow();
                  router.push(`/${navLinks[index]}`);
                }}
              >
                <div
                  className={`text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] duration-200  font-bold ${
                    showMenuLinkBackground === index
                      ? "text-white ml-4"
                      : "text-black ml-0"
                  }`}
                >
                  <span className="capitalize">
                    {link === "" ? "Home" : link}
                  </span>
                </div>
              </div>
              <div className="absolute top-0 w-full  h-[40px] sm:h-[55px] md:h-[70px] lg:h-[80px] -z-20  flex justify-center items-center">
                <div
                  className={` w-full ${
                    showMenuLinkBackground === index
                      ? "h-[40px] sm:h-[55px] md:h-[70px] lg:h-[80px]"
                      : "h-0"
                  } duration-200  bg-black`}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className={`absolute w-[200px] overflow-hidden flex justify-center items-center top-0 transition-[scale] duration-200  left-0 aspect-square 
          pointer-events-none `}
          style={{
            scale: `${showInfoBox ? "1" : "0"}`,
            left: `${infoBoxPositition.x - 100}px`,
            top: `${infoBoxPositition.y - 100}px`,
          }}
        >
          <div
            className="w-full h-full duration-200 rounded-[10px]"
            style={{ transform: `translateY(-${infoBoxContent * 200}px)` }}
          >
            {/* <div className="w-full h-full bg-green-400 rounded-[10px]" />
            <div className="w-full h-full bg-pink-400 rounded-[10px]" />
            <div className="w-full h-full bg-yellow-400 rounded-[10px]" />
            <div className="w-full h-full bg-purple-400 rounded-[10px]" /> */}

            <div>
              <Image
                src={imageOne}
                alt="imageOne"
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <div>
              <Image
                src={imageTwo}
                alt="imageTwo"
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <div>
              <Image
                src={imageThree}
                alt="imageThree"
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <div>
              <Image
                src={imageFour}
                alt="imageFour"
                className="w-full h-full rounded-[10px]"
              />
            </div>
          </div>
          <div className="absolute w-[50px] aspect-square text-[11px] font-semibold text-white flex justify-center items-center bg-black rounded-full">
            VISIT
          </div>
        </div>
      </div>

      <div
        className={` fixed top-0 right-0 m-6 p-3 z-50 mix-blend-difference duration-300  aspect-square cursor-pointer flex 
        justify-center items-center  rounded-full bg-white`}
        onClick={handleMenuShow}
      >
        <div>
          <div className="w-[20px] min-h-[1.5px]  bg-black duration-200 rounded-full mb-1 " />
          <div className="w-[20px] min-h-[1.5px]  bg-black duration-200 rounded-full mb-1 " />
        </div>
      </div>
    </>
  );
};

export default MENU;
