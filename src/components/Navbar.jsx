import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center shrink-0">
            <img src={logo} alt="VirtualR logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl tracking-tight">VirtualR</span>
          </div>

          {/* Desktop nav */}
          <ul className="hidden lg:flex text-xl ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions (visible on sm and up) */}
          <div className="hidden sm:flex items-center text-xl space-x-4">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign Up
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
            >
              Create an account
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              aria-label="Toggle navigation"
              aria-expanded={mobileDrawerOpen}
              className="p-2"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-x-0 top-[64px] z-20 bg-neutral-900 w-full p-8 flex flex-col items-center lg:hidden">
            <ul className="w-full text-center">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} className="text-xl">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-4">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
