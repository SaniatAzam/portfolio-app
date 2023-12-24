import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  const form = useRef();

  const recaptchaRef = useRef();

  const [mailState, setMailState] = useState(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const FrontOfCard = () => {
    return (
      <div className="absolute inset-0 w-full h-full flex items-center bg-[#222222] border-[1px] border-[#303030]  rounded-2xl transition-all duration-100 delay-200 z-20 hover:opacity-0">
        <div className="justify-center items-center absolute right-[110px]">
          SA ADAT AZAM SANIAT
        </div>

        {/* <div className="h-[25px] w-[25px] bg-[#ffffff] absolute right-[50px] z-5 shadow-2x rounded-lg"></div> */}
        <div className="h-[50px] w-[50px] bg-[#f4bc47] absolute right-[0px] bottom-0 z-4 shadow-xl rounded-lg animate-pulse"></div>
      </div>
    );
  };

  const BackOfCard = () => {
    return (
      <div className="absolute inset-0 w-full h-full flex items-center bg-[#222222] border-[1px] border-[#303030] rounded-2xl transition-all z-10 card-back">
        <div className="h-[50px] w-[50px] bg-[#222222] z-5 shadow-2xl rounded-lg"></div>
        <div className="h-[25px] w-[25px] bg-[#222222] z-4 shadow-2xl rounded-lg"></div>
        <div className="flex-col justify-left items-center text-left">
          <a
            href="mailto:saniatsaadat@gmail.com"
            // rel="noopener noreferrer"
            target="_blank"
            className="flex flex-row items-center justify-center px-4 py-2 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
          >
            <MdOutlineEmail className="w-6 h-6 mr-2" /> saniatsaadat@gmail.com
          </a>
          <a
            href="mailto:sa.saniat@mail.mcgill.ca"
            // rel="noopener noreferrer"
            className="flex flex-row items-left justify-left px-4 py-2 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
          >
            <MdOutlineEmail className="w-6 h-6 mr-2" /> sa.saniat@mail.mcgill.ca
          </a>
          <a
            // rel="noopener noreferrer"
            className="flex flex-row items-left justify-left px-4 py-2 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
          >
            <IoCall className="w-6 h-6 mr-2" /> +1 438-921-7845
          </a>
        </div>
      </div>
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (email === "" || name === "" || message === "") {
      setMailState("Please fill out all the fields!");
      return;
    }

    if (!isCaptchaValid) {
      setMailState("Please complete the CAPTCHA to send your message.");
      return;
    }

    emailjs
      .sendForm(
        "service_2g2hcow",
        "template_m38zzbf",
        form.current,
        "g6FbY9h30qmcAuZWG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMailState("Your message has been sent successfully!");
          form.current.reset();
          recaptchaRef.current.reset();
          setName("");
          setEmail("");
          setMessage("");
          setIsCaptchaValid(false); // Reset CAPTCHA state
        },
        (error) => {
          console.log(error.text);
          setMailState(
            "An error occurred while sending your message. Please try again."
          );
        }
      );
  };

  const onCaptchaChange = (value) => {
    setIsCaptchaValid(!!value);
  };

  return (
    <div
      id="contulee"
      className="relative min-h-screen justify-center bg-[#0F0F0F] overflow-hidden pb-10 pl-5 pr-5 md:snap-y md:snap-mandatory pt-10 "
    >
      <div className="flex lg:w-1/4 sm-1/4 items-center justify-center mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10">
          CONTACT
        </h1>
      </div>
      <div className="my-0 md:flex md:space-x-10 align-center justify-center mx-auto text-center mt-1/6]">
        {/* <div>
          <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
            <FrontOfCard />
            <BackOfCard />
          </div>
        </div> */}

        {/* FORM */}
        <div className="w-full  w-1/4 md:w-1/2 justify-center align-center bg-[#222222] rounded-xl backdrop-filter backdrop-blur-lg  border-[1px] border-[#f4bc47]">
          <form ref={form} onSubmit={sendEmail} className="p-4">
            {/* NAME */}
            <div className="mb-6">
              <label
                className="flex text-pink-500 text-base font-thin my-4 font-mono"
                htmlFor="from_name"
              >
                {mailState === "Your message has been sent successfully!" ? (
                  <span className="text-green-500"> {mailState}</span>
                ) : (
                  <p>{mailState}</p>
                )}
              </label>

              <input
                className="shadow-md shadow-inner border-[1px] border-[#303030] rounded w-full py-2 px-3 bg-[#222222] font-mono text-white leading-tight focus:outline-none focus:border-[#f4bc47] focus:ring-1 focus:ring-[#f4bc47] invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                id="from_name"
                type="text"
                name="from_name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* EMAIL */}
            <div className="mb-6">
              <label
                className="block text-[#222222] text-sm  mb-2 font-bold"
                htmlFor="reply_to"
              >
                Email
              </label>

              <input
                className="shadow-md shadow-inner border-[1px] border-[#303030] focus:outline-none focus:border-[#f4bc47] focus:ring-1 focus:ring-[#f4bc47] invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500 bg-[#222222] font-mono text-white rounded w-full py-2 px-3 leading-tight"
                id="reply_to"
                type="email"
                name="reply_to"
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* MESSAGE */}
            <div className="mb-6">
              <label
                className="block text-[#222222] text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="shadow-md shadow-inner resize-none block p-2.5 w-full text-base font-mono text-white border-[1px] border-[#303030] bg-[#222222] rounded focus:outline-none focus:border-[#f4bc47] focus:ring-1 focus:ring-[#f4bc47] invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                id=""
                name="message"
                placeholder="Your message..."
                rows="10"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* SUBMIT */}
            <div className="block md:flex items-center justify-center">
              <input
                className="bg-[#222222] border-[1px] border-[#f4bc47] text-[#f4bc47] hover:border-[#222222] hover:bg-[#f4bc47] hover:text-[#222222] hover:animate-pulse shadow-md font-bold py-6 px-10 hover:shadow-inner rounded focus:outline-none focus:shadow-outline cursor-pointer m-10"
                type="submit"
                value="Send"
              />

              <div className="justify-center items-center pl-7 md:pl-0">
                <ReCAPTCHA
                  sitekey="6LdLEzUpAAAAAK2vNAspB1IyYSm1tbHHC9977W61"
                  theme="dark"
                  ref={recaptchaRef}
                  onChange={onCaptchaChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
