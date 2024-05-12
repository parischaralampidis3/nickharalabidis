import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function TopBar() {
  return (
    <div className="w-4/5 mx-10  mt-5 mb-9  h-10 md:mx-auto">
      <div className="flex flex-row items-center justify-around">
        <div className="flex flex-col p-0 sm:flex-row justify-start items-center  p-2 font-semibold">
          <div className="flex flex-row items-center mt-0 text-md md:text-md w-2/3">
            <FontAwesomeIcon icon={faPhone} />
            <h3 className="mx-1  text-base text-blue-900  ">(+30) 6977500987</h3>
          </div>

          <div className="flex flex-row items-center mt-0 ml-14 mx-10 text-base md:text-md">
            <FontAwesomeIcon icon={faEnvelope} />
            <h3 className="mx-1 text-base text-blue-900">harlawoffice@gmail.com</h3>
          </div>
          <div className="flex flex-row items-center  mt-0 ml-0 mx-9 text-xl md:text-xl">
           <FontAwesomeIcon icon={faInstagram} />
          <a className="text-md" href="https://www.instagram.com/haralambidis_nick">   <h3  className="mx-1 text-base text-blue-900">haralambidis_nick</h3></a>
          </div>
        </div>
   
      </div>
    </div>
  );
}
export default TopBar;
