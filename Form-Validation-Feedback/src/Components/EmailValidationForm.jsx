import { useState } from "react";

import style from "../assets/css/Email-Validation.module.css";

const EmailValidationForm = () => {

  const [focused, setFocused] = useState(false);

  const [email, setEmail] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully");

    setEmail("");
  };

  const emailPattern = /^[a-zA-Z]+[0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = emailPattern.test(email);

  const validForm = isValidEmail;

  return (
    <div className="grid grid-rows grid-cols-12">
      <div className="col-span-12 px-[15px] sm:col-span-10 sm:col-start-2 sm:px-0 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5">
        <form
          action=""
          onFocus={(e) => setFocused(true)}
          onBlur={(e) => setFocused(false)}
          onSubmit={handleFormSubmission}
          className="p-[30px] border border-white/50 rounded-lg backdrop-blur-[9px] text-center text-white"
        >
          <h2 className="mb-[22px] text-[2rem] font-bold capitalize">
            contact form
          </h2>

          <div className="relative mb-6">
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value.trim())}
              className={`${style.formInput} w-full h-10 border-2 ${
                email.length >= 1 && !validForm
                  ? "border-rose-400"
                  : "border-amber-50"
              } border-t-0 border-r-0 border-l-0 text-[16.5px]`}
              autoComplete="off"
            />
            <label
              className={`${
                focused || email ? style.focus : ""
              } absolute left-0 top-1/2 -translate-y-1/2 -z-[1] font-medium transition-all duration-200 ease-in-out`}
            >
              Enter Your Email
            </label>
          </div>
          {email.length >= 1 && !validForm && (
            <p className="bg-rose-400 text-rose-50 p-3 mb-5 rounded">
              Please Enter Valid Email
            </p>
          )}
          <button
            type="submit"
            className={`${style.submitBtn} w-full cursor-pointer rounded-[3px] border-2 border-transparent bg-white px-5 py-3 font-semibold capitalize text-black transition-all duration-300 disabled:opacity-50`}
            disabled={!validForm}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default EmailValidationForm