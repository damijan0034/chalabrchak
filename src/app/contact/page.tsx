import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-[80%] lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative bg-red-100 h-[40%] w-full md:h-full md:w-1/2">
          <Image src="/Vesna/Vesna.jpg" alt="" fill className="object-cover"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-7 flex flex-col gap-3 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Vesna</h1>
          <p>Log into your account or create a new one using social buttons</p>
        
        </div>
      </div>
       {/* BOX */}
       <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-[80%] lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative bg-red-100 h-[40%] w-full md:h-full md:w-1/2">
          <Image src="/Vesna/Nikola.jpg" alt="" fill className="object-cover"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-7 flex flex-col gap-3 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Nikola</h1>
          <p>Log into your account or create a new one using social buttons</p>
        
        </div>
      </div>
    </div>
  );
};

export default ContactPage;