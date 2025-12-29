import React from "react";
import { pricingOptions } from "../constants/index";
import { CheckCircle2 } from "lucide-react";

function Price() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>

      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="p-10 border border-neutral-700 rounded-xl h-full bg-neutral-900/50">
              
              {/* Title */}
              <p className="text-4xl mb-6 font-semibold flex items-center">
                {item.title}

                {item.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-lg ml-3">
                    (Most Popular)
                  </span>
                )}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold">{item.price}</span>
                <span className="text-neutral-400 text-xl ml-1">/Month</span>
              </div>

              {/* Features */}
              <ul className="mb-10">
                {item.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="mt-4 flex items-center text-lg"
                  >
                    <CheckCircle2 className="text-orange-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <a
                href="#"
                className="bottem-0 inline-flex justify-center items-center w-full h-12 mt-6 tracking-tight hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200 text-xl"
              >
                Subscribe
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
