import React, { useEffect } from "react";
import QRcode from "qrcode";
import { useState } from "react";
import NavBar from "./Navbar";
function PermissionComponent({ id }) {
  let [image, setImage] = useState("");
  useEffect(() => {
    QRcode.toDataURL(`http://localhost/search/${id}`, (err, url) => {
      setImage(url);
    });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="w-[65vh] border-2 border-blue-500 rounded-md h-[70vh] m-auto mt-[15vh]">
        <h1 className="text-center font-bold text-xl mb-4 mt-14">
          Mwenedata Apotre
        </h1>
        <p className="text-center">
          Scan the following code or use the code below it as a pass:
        </p>
        <div>
          <img src={image} alt="" className="w-[30vh] m-auto" />
        </div>
        <h2 className="font-bold text-center">Code: {id}</h2>
        <button className="w-20 ml-[40%] mt-4 h-12 bg-blue-600 text-white rounded-md font-bold">Print</button>
      </div>
    </div>
  );
}

export default PermissionComponent;
