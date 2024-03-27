"use client";

import React from "react";
import Components from "./ContactForm/ContactFrom";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Contact-Us</h1>
        <p>Please Fill The Form</p>
        <Components/>
        <Link className="font-semibold align-center" style={{textDecoration: "underline"}} href= "/grid2">Images Grids</Link> <br/>
        <Link className="font-semibold align-center" style={{textDecoration: "underline"}} href= "/grid">Data Grids</Link>
      </div>
        
      <div>
      </div>
    </>
  );
}
