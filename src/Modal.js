import React, { useState, useEffect, useRef } from "react";
import { FiMinimize2 } from "react-icons/fi";
import { FaLink } from "react-icons/fa";

const Modal = ({
  title,
  link = null,
  subtitle,
  description,
  d1,
  work = null,
  photo,
  color,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsViewed(true);
  };

  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && event.target.classList.contains("modal-overlay")) {
        toggleModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  function works() {
    return (
      <div className="my-1 text-left">
        {work.map ? (
          work.map((item, index) => (
            <div key={index} className="my-4">
              <div class="border-b border-gray-300 my-4"></div>
              <div className="flex space-x-2 items-center">
                <h1 className="text-xl md:text-3xl font-bold">• {item.key}</h1>
                {item.link && (
                  <span className="">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center px-4 py-2 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
                    >
                      <FaLink className="w-6 h-6 mb-1" />
                    </a>
                  </span>
                )}
              </div>

              {typeof item.value === "string" ? (
                <p className="text-white">{item.value}</p>
              ) : (
                item.value
              )}

              {item.photo ? (
                <img
                  src={item.photo}
                  className="my-4 mx-auto shadow-md w-full md:w-3/4"
                />
              ) : (
                <p></p>
              )}
            </div>
          ))
        ) : (
          <p>NO</p>
        )}
      </div>
    );
  }

  return (
    <div className="font-mono">
      <div
        id="meeloo"
        className={`p-[10vw] rounded-md bg-[#222222] m-4 hover:scale-110 cursor-pointer transition-all duration-150 ease-out border-[1px] border-[#f4bc47] hover:animate-none ${
          isViewed ? "" : "animate-pulse"
        }`}
        onClick={toggleModal}
      >
        <div className="text-center">
          <h2 className="text-lg font-semibold text-[--secondary]">{title}</h2>
          <h3 className="text-md text-gray-600">{subtitle}</h3>
          <p className="mt-2 text-[--secondary]">{description}</p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-[#FFB91D] backdrop-filter backdrop-blur-sm">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50" />

          <div className="modal-container rounded-lg max-w-[95vw] mx-auto max-h-[80vh] overflow-y-auto z-51 bg-[#222222] opacity-95 border-[1px] border-[#303030] pb-5">
            <div
              className={`sticky backdrop-filter backdrop-blur-lg top-0 z-52 bg-[#222222] opacity-90 shadow-md border-[1px] border-[#303030] w-4/5 rounded-bl-xl rounded-br-xl mx-auto`}
            >
              <button
                className="bg-transparent bg-[#FFB91D]  px-1 py-1 mt-2 mx-3 rounded-md float-left scale-125 hover:scale-100 cursor-pointer transition-all duration-150 ease-out"
                onClick={toggleModal}
              >
                <FiMinimize2 className="" />
              </button>
              <h2 className="text-lg font-semibold mt-2 mb-2">{title}</h2>
            </div>
            <div className="modal-content p-5">
              <img
                src={photo}
                alt="Modal"
                className="mt-4 sm:w-max lg:w-1/4 md:w-1/2 justify-center mx-auto"
              />
              <h3 className="text-md text-gray-600">{subtitle}</h3>
              <p className="mt-2">{description}</p>
              <p>{d1}</p>
              {works()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
