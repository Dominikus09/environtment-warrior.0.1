import Head from "next/head";
import { Fragment, useState } from "react";
import Navbar from "../navbar/navbar";

export default function Layout({ children, title, cart }) {
  return (
    <Fragment>
      <div className="h-screen">
        <Head>
          <title>Environtment Warrior | {title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <main className="">
          <Navbar cartLength={cart} />
          <div className="flex flex-col justify-center px-10 w-full ">
            {children}
          </div>
        </main>
        <footer className="border-t bg-greensm flex flex-col h-fit justify-end px-5">
          <div className="flex flex-col sm:flex-row py-10 text-white space-y-4 sm:space-y-0  sm:space-x-4">
            <div className="w-full sm:w-3/12 border-r space-y-2">
              <h2 className="text-white font-bold text-xl">
                Environtment Warrior
              </h2>
              <p className="font-light text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-grow space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="sm:px-4">
                <h2 className="font-medium">Home</h2>
                <p className="font-light text-sm">Benefit</p>
              </div>
              <div className="sm:px-4">
                <h2 className="font-medium">About</h2>
                <p className="font-light text-sm">Benefit</p>
              </div>
              <div className="sm:px-4">
                <h2 className="font-medium">Product</h2>
                <p className="font-light text-sm">Benefit</p>
              </div>
            </div>
            <div>
              <div className="w-30 sm:px-10">
                <h2 className="font-medium">Our Sosial Media</h2>
                <p className="font-light text-sm flex py-2">
                  <svg
                    className="cursor-pointer hover:scale-105"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                    style={{ fill: "#FFFFFF" }}
                  >
                    <path d="M36.5,6h-25C8.468,6,6,8.468,6,11.5v25c0,3.032,2.468,5.5,5.5,5.5h25c3.032,0,5.5-2.468,5.5-5.5v-25	C42,8.468,39.532,6,36.5,6z M18,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1V34z M15.5,18c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C18,16.881,16.881,18,15.5,18z M35,34	c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1v-7.5c0-1.379-1.121-2.5-2.5-2.5S25,25.121,25,26.5V34c0,0.553-0.447,1-1,1h-3	c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v0.541C26.063,20.586,27.462,20,29,20c3.309,0,6,2.691,6,6V34z"></path>
                  </svg>
                  <svg
                    className="cursor-pointer hover:scale-105"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                    style={{ fill: "#FFFFFF" }}
                  >
                    <path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z"></path>
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <p className="flex flex-col items-center text-white py-5 text-sm font-Poppins border-t">
            Copyright © 2022. All Rights Reserved
          </p>
        </footer>
      </div>
    </Fragment>
  );
}