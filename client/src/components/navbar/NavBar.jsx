'use client';

import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { signOut } from "next-auth/react";
import Link from 'next/link';

const NavBar = () => {
  const [showModal, setShowModal] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <div className={`fixed z-20 h-16 top-0 left-0 ${isScrolled ? "shadow-md backdrop-blur" : ""}`}>
      <div className="h-full w-2/3 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-all">
          <h1 className={`${isScrolled ? "text-yellow-600" : "text-[#cec7c7]"} text-2xl font-bold`}>
            StayCation
            <AiOutlineHome size={25} color={isScrolled ? "rgba(37, 99, 235)" : "#cec7c7"} />
          </h1>
        </Link>
        <div>
          <div className="cursor-pointer" onClick={toggleModal}>
            <AiOutlineUser size={30} color={isScrolled ? "rgba(37, 99, 235)" : "#cec7c7"} />
            {showModal && (
              <div
                onClick={toggleModal}
                className="absolute top-16 right-[270px] shadow-md flex flex-col gap-4 p-4 bg-white rounded-xl"
              >
                <Link href="/bookings">
                  Bookings
                </Link>
                <button onClick={() => signOut()} className="text-slate-500 text-center">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
