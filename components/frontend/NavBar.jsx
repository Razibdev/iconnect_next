"use client"
import React from 'react';
import { Navbar } from "flowbite-react";


export default function NavBar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="bg-white text-slate-700 dark:bg-slate-700 dark:text-slate-50"
    >
      <Navbar.Brand href="/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Iconnecty
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="text-md">
        <Navbar.Link href="/navbars" active={true} className=" leading-9">
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars" className=" leading-9">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars" className=" leading-9">
          Our Service
        </Navbar.Link>
        <Navbar.Link href="/navbars" className=" leading-9">
          Protfolio
        </Navbar.Link>
        <Navbar.Link href="/navbars" className=" leading-9">
          Blog
        </Navbar.Link>
        <Navbar.Link href="/navbars" className=" leading-9">
          Team
        </Navbar.Link>
        <Navbar.Link href="/navbars" className=" leading-9">
          Contacts
        </Navbar.Link>
        <Navbar.Link href="/navbars" className=" leading-9">
          WorkShop
        </Navbar.Link>
        <Navbar.Link href="/navbars" className=" leading-9">
          <button className="font-inter bg-btnBg cs-btn text-textColor btn-radius">
            Start A Project
          </button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
