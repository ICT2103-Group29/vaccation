import React from "react";
import mail from "../../assets/images/mail.jpg";
import telephone from "../../assets/images/telephone.jpg";

const Footer = () => {
  return (
    // <div className='flex justify-center items-center h-16 bg-black text-white'>
    // <p>Copyright © 2021 EGGMATIC All rights reserved.</p>
    // </div>
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href=""
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            {/* <i class="fas fa-cubes fa-lg text-purple-500"></i> */}
            <span class="text-xl text-blue-900">Vaccation</span>
          </a>
          <p class="mt-2 text-sm text-gray-500 mb-3">
            Book with confidence and travel safely with us
          </p>

          <div class="content flex py-2">
            <img class="w-5 h-5" src={mail} alt=""></img>
            <div class="item-body text-sm text-gray-500 px-2">
              Support@vaccation.mail.com
            </div>
          </div>

          <div class="content flex py-2">
            <img class="w-5 h-5" src={telephone} alt=""></img>
            <div class="item-body text-sm text-gray-500 px-2">
              023-691-456-978
            </div>
          </div>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Our Service
            </h2>
            <nav class="list-none mb-10">
              <li>
                {/* <a href="" class="text-gray-600 hover:text-gray-800"> */}
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500"
                >
                  Round Trip
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500 "
                >
                  One Way
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500"
                >
                  Multi Trip
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Our Product
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500 "
                >
                  Mountain
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500"
                >
                  Beach
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500 "
                >
                  Waterfall
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Resources
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500 "
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500 "
                >
                  Partners
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Information
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500 "
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="mt-2 text-sm text-gray-500 hover:text-green-500 "
                >
                  Testimonials
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            {/* © 2021 Copyright: */}
            Copyright @Vaccation2021
            <a
              href="https://www.tailwind-elements.com/"
              class="text-gray-600 ml-1"
              target="_blank"
            >
              {/* Tailwind Elements */}
              All Right Reserved
            </a>
          </p>

          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="" class="text-gray-500">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="ml-3 text-gray-500">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="ml-3 text-gray-500">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="" class="ml-3 text-gray-500">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="" class="ml-3 text-gray-500">
              <i class="fab fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
