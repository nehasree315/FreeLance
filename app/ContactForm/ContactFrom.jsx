"use client";

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Components() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("FullName: ", fullname);
    console.log("Email: ", email);
    console.log("Gender:", gender);
    console.log("Message: ", message);
  };

  return (
    <>
      <form
        className="py-4 mt-4 border-t flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Joe Sasan"
          />
        </div>

        <div>
          <label htmlFor="e-mail">E-Mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Joe@gmail.com"
          />
        </div>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <div>
          <label htmlFor="message">Your Message</label>
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            className="h-32"
            id="message"
            placeholder="Type Your Message Here...."
          />
        </div>

        <button type="submit" className="p-3 bg-green-700 font-bold text-white">
          Save
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        <div className="text-red-600 py-2 px-5">Error Message</div>
      </div>
    </>
  );
}
