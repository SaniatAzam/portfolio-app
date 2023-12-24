import React, { useState, useRef, useEffect } from "react";
import { FiMinimize2 } from "react-icons/fi";
import cert from "./photos/Cert.png";

const ResponsibilityModal = ({ photo = null, title, resps }) => {
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

  return (
    <div>
      <div
        className={`md:p-[1vw] w-3/4 md:w-full p-[3vw] rounded-md bg-[#222222] my-4  max-w-auto hover:scale-110 cursor-pointer transition-all duration-150 ease-out border-[1px] border-[#f4bc47] hover:animate-none ${
          isViewed ? "" : "animate-pulse"
        }`}
        onClick={toggleModal}
      >
        <div className="text-center">
          <h2 className="text-xs md:text-md font-semibold text-[--secondary]">
            Tasks
          </h2>
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
              <h2 className="text-lg font-semibold mt-2 mb-2 text-center">
                {title}
              </h2>
            </div>
            <div className="modal-content p-5">
              <img
                src={photo}
                alt="Modal"
                className="mt-4 sm:w-max lg:w-1/4 md:w-1/2 justify-center mx-auto rounded-md"
              />
              <div className="my-10 text-left">
                {resps.map((r, index) => (
                  <p key={index} className="mb-2 font-mono md:mx-[200px]">
                    {r}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsibilityModal;
