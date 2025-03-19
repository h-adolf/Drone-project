import React, { useState } from "react";
import { Send } from "lucide-react";

const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="bg-[#2374e1] p-2 rounded inline-block mb-6">
              <span className="font-normal">Lakshdeep Aviation</span>
            </div>
            <p className="text-gray-400 mb-4">
              Germany — 785 15th Street,
              <br />
              Office 478, Berlin, De 81566
            </p>
            <p className="text-gray-400">info@email.com</p>
            <p className="text-gray-400">+1 840 841 25 69</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  TRAINING
                </a>
              </li>
              <li>
                <a href="/service" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">NEWSLETTER</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 bg-white/10 px-4 py-2 rounded-l"
              />
              <button
                className={`px-4 py-2 rounded-r ${
                  isChecked
                    ? "bg-[#2374e1] hover:bg-[#1e63c4]"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
                disabled={!isChecked}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="mr-2"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="privacy" className="text-gray-400">
                I agree to the <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms and condition</a>
              </label>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
          <p>Lakshdeep Aviation © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
