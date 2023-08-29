import React from "react";

const Footer = () => {
  const date = new Date();
  const currentDate = date.getFullYear();

  return (
    <footer className="bg-white border-t ">
      <div className="mx-auto py-5">
        <p className="text-center text-xs text-black">
          &copy; {currentDate} Roi-D Store, Inc. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
