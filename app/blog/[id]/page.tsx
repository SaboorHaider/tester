import React from 'react';
import { databloglistindivi } from "../../../data/data";
import Header from '../../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { GoCommentDiscussion } from "react-icons/go";
import { PiUserCircleGear } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsCalendarMonth } from "react-icons/bs";
import { MdKeyboardArrowRight } from 'react-icons/md';
import Footer from '../../../components/Footer';
import { FaFacebookF, FaGithub, FaPinterest, FaSearch, FaStar, FaYoutube } from 'react-icons/fa';

interface ParamsIn {
  params: {
    id: string;
  };
}

const Page = ({ params }: ParamsIn) => {
  const paramId = Number(params.id);
  const filtered = databloglistindivi.find((item) => item.id === paramId);

  return (
    <div className="bg-white">
      <header>
        <Header />
        <div className="relative">
          <Image
            src="/mainbg.jpg"
            alt="Header Background"
            width={900}
            height={900}
            className="w-full h-[200px] object-cover "
          />
          <div className="absolute inset-0 lg:m-[70px] justify-center text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-3xl font-bold">BlogPost</h2>
            <div className="text-center justify-center items-center flex mt-1">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />
              <p className="text-yellow-500 cursor-pointer">
                <Link href="/Error404">BlogPost</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="lg:flex gap-4 px-6 lg:px-48 mt-[100px] mb-[100px] justify-between">
        <div className="lg:w-[600px]">
          <div className="flex flex-col gap-4 justify-center mb-[50px]">
            <Image
              src={filtered?.image || "/fallback-image.jpg"}
              alt="blogs"
              width={400}
              height={400}
              className="lg:w-[600px] lg:h-[450px] w-[300px] h-[250px]"
            />
            <h1 className="flex gap-3 text-gray-600">
              <BsCalendarMonth className="text-bordercoloryello text-2xl" />
              Feb 17, 2022 / <GoCommentDiscussion className="text-bordercoloryello text-2xl" /> 3 /{' '}
              <PiUserCircleGear className="text-bordercoloryello text-2xl" /> Admin
            </h1>
            <h1 className="lg:text-[24px] text-[20px] font-bold font-helvetica text-blackkk">
              {filtered?.title}
            </h1>
            <p className="lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk">
              {filtered?.para}
            </p>
            <p className="lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk">
              {filtered?.para}
            </p>
            <p className="lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk">
              {filtered?.para}
            </p>

            <div className="lg:flex gap-7 mt-[20px] lg:w-[580px] w-[300px]">
              <div>
                <Image
                  src={filtered?.img2 || "/fallback-image.jpg"}
                  alt="blogs"
                  width={100}
                  height={100}
                  className="lg:w-[400px] mt-[20px] lg:h-[200px] w-[300px] h-[250px]"
                />
              </div>
              <div>
                <p className="lg:w-[300px] h-[120px] w-[300px] pt-[30px] font-medium text-[14px] text-blackkk">
                  {filtered?.para}
                </p>
              </div>
            </div>

            <p className="lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk">
              {filtered?.para}
            </p>
            <p className="lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk">
              {filtered?.para}
            </p>
            <div className="border-[1px] lg:h-[40px] h-[55px] lg:mt-0 mt-[40px] lg:flex justify-between p-2 text-[13px]">
              <div className="flex gap-3">
                <h1 className="font-bold">Tags:</h1>
                <h1 className="text-gray-600">Resturant, Dinner, Pizza, Yummy.</h1>
              </div>
              <h1 className="flex gap-3 text-gray-700">
                Share:{' '}
                <a className="text-xl" href="https://www.linkedin.com/in/abdul-saboor-b57043288">
                  <FaLinkedin />
                </a>
                <a className="text-xl" href="https://github.com/SaboorHaider">
                  <IoLogoGithub />
                </a>
                <a className="text-xl" href="https://www.instagram.com/sabor_110/profilecard/?igsh=bnFqMTg4MHAzOGp1">
                  <FaInstagram />
                </a>
              </h1>
            </div>
          </div>
        </div>

        {/* Sidebar content */}
        <div className="col-span-1">
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Search Your Keyword.."
                  className="w-full px-4 py-2 border rounded-l-lg focus:outline-none"
                />
                <button className="bg-orange-500 text-white px-4 py-[13px] rounded-r-lg hover:bg-orange-600">
                  <FaSearch />
                </button>
              </div>
              <div className="text-center">
                <Image
                  src="/blogS1.png"
                  alt="Profile"
                  width={900}
                  height={900}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Saboor Haider</h3>
                <p className="text-gray-500">Blogger/Photographer</p>
                <div className="flex justify-center items-center text-orange-500 my-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-gray-500 text-sm ml-2">(1 Review)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis distinctio, odio eligendi
                  suscipit reprehenderit atque
                </p>
                <div className="">
                  <ul className="flex space-x-4 justify-center">
                    <li className="">
                      <Link href="https://www.linkedin.com/in/abdul-saboor-b57043288">
                        <FaLinkedin className="text-xl cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out" />
                      </Link>
                    </li>

                    <li className="">
                      <Link href="https://github.com/SaboorHaider">
                        <FaGithub className="text-xl cursor-pointer hover:text-red-700 transition-all duration-300 ease-in-out" />
                      </Link>
                    </li>

                    <li className="">
                      <Link href="https://www.instagram.com/sabor_110/profilecard/?igsh=bnFqMTg4MHAzOGp1">
                        <FaInstagram className=" text-xl cursor-pointer hover:text-red-300 transition-all duration-300 ease-in-out" />
                      </Link>
                    </li>

                    <li className="">
                      <Link href="https://www.facebook.com/SaboorHaider110/">
                        <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
 {/* Sidebar Recent Post  */}

 <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Recent Post</h3>

                  <div className="flex items-center mb-1">
                    <Image
                      src="/blogS2.jpg"
                      alt="Recent Post"
                      width={900}
                      height={900}
                      className="w-[69px] h-16 rounded-lg mr-4 object-cover"
                    />
                    <div>
                      <p className="text-gray-500 text-sm">June 22, 2020</p>
                      <p className="text-gray-700">
                        Lorem ipsum dolor sit cing elit, sed do.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-1">
                    <Image
                      src="/blogS3.jpg"
                      alt="Recent Post"
                      width={900}
                      height={900}
                      className="w-[100px] h-16 rounded-lg mr-4 object-cover"
                    />
                    <div>
                      <p className="text-gray-500 text-sm">June 22, 2020</p>
                      <p className="text-gray-700">
                        Lorem ipsum dolor sit cing elit, sed do.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-2">
                    <Image
                      src="/blogS4.jpg"
                      alt="Recent Post"
                      width={900}
                      height={900}
                      className="w-[69px] h-16 rounded-lg mr-4 object-cover"
                    />
                    <div>
                      <p className="text-gray-500 text-sm">June 22, 2020</p>
                      <p className="text-gray-700">
                        Lorem ipsum dolor sit cing elit, sed do.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-1">
                    <Image
                      src="/blogS5.jpg"
                      alt="Recent Post"
                      width={900}
                      height={900}
                      className="w-[100px] h-16 rounded-lg mr-4 object-cover"
                    />
                    <div>
                      <p className="text-gray-500 text-sm">June 22, 2020</p>
                      <p className="text-gray-700">
                        Lorem ipsum dolor sit cing elit, sed do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Filter by Menu  */}

              <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Filter By Menu</h3>

                  <div className="flex items-center mb-4 cursor-pointer">
                    <Image
                      src="/blogS6.jpg"
                      alt="Recent Post"
                      width={900}
                      height={900}
                      className="w-16 h-16 rounded-lg mr-4"
                    />

                    <div className="grid grid-cols-2 justify-between text-black font-semibold text-sm">
                      <p className="">Chicken Fry</p>

                      <p className="ml-10">26</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 cursor-pointer">
                    <Image
                      src="/blogS7.jpg"
                      alt="Recent Post"
                      width={900}
                      height={900}
                      className="w-16 h-16 rounded-lg mr-4"
                    />

                    <div className="grid grid-cols-2 justify-between text-black font-semibold text-sm">
                      <p className="">Burger Food</p>

                      <p className="ml-10">26</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 cursor-pointer">
                    <Image
                      src="/blogS8.jpg"
                      alt="Recent Post"
                      width={900}
                      height={900}
                      className="w-16 h-16 rounded-lg mr-4"
                    />

                    <div className="grid grid-cols-2 justify-between text-black font-semibold text-sm">
                      <p className="">Pizza</p>

                      <p className="ml-[50px]">26</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 cursor-pointer">
                    <Image
                      src="/blogS9.jpg"
                      alt="Recent Post"
                      width={900}
                      height={900}
                      className="w-16 h-16 rounded-lg mr-4"
                    />

                    <div className="grid grid-cols-2 justify-between text-black font-semibold text-sm">
                      <p className="">Fresh Fruits</p>

                      <p className="ml-12">26</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Tags */}

              <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2">
                <div className="p-3">
                  <h3 className="text-xl font-bold mb-4">Popular Tags</h3>

                  <div className="grid lg:grid-cols-2 gap-4 ">
                    <div className="border p-1 text-center">Sandwich</div>
                    <div className="border p-1 text-center">Tikka</div>
                    <div className="border p-1 text-center">Bbq</div>
                    <div className="border p-1 text-center">Restaurant</div>
                    <div className="border p-1 text-center">Chicken Sharma</div>
                    <div className="border p-1 text-center">Health</div>
                    <div className="border p-1 text-center">Fastfood</div>
                    <div className="border p-1 text-center">Food</div>
                    <div className="border p-1 text-center">Pizza</div>
                    <div className="border p-1 text-center">Burger</div>
                    <div className="border p-1 text-center">Chicken</div>
                  </div>
                </div>
              </div>

              {/* Sidebar Gallery */}

              <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2">
                <div className="p-3">
                  <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Image
                      src="/blogS11.jpg"
                      alt="Delicious Pizza"
                      width={900}
                      height={900}
                      className="w-full h-[105px] rounded-sm shadow-md"
                    />
                    <Image
                      src="/blogS12.jpg"
                      alt="Gourmet Dish"
                      width={900}
                      height={900}
                      className="w-full h-[105px] rounded-sm shadow-md"
                    />
                    <Image
                      src="/blogS13.jpg"
                      alt="Salmon Dish"
                      width={900}
                      height={900}
                      className="w-full h-[105px] rounded-sm shadow-md"
                    />
                    <Image
                      src="/blogS14.jpg"
                      alt="Grilled Meats"
                      width={900}
                      height={900}
                      className="w-full h-[105px] rounded-sm shadow-md"
                    />

                    <Image
                      src="/blogS15.jpg"
                      alt="Hearty Breakfast"
                      width={900}
                      height={900}
                      className="w-full h-[105px] rounded-sm shadow-md"
                    />
                    <Image
                      src="/blogS16.jpg"
                      alt="Pancakes"
                      width={900}
                      height={900}
                      className="w-full h-[105px] rounded-sm shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2 ">
                <div className="p-3">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>

                  <div className=" ">
                    <ul className="flex space-x-4  justify-center ">
                      <li className="p-2 bg-gray-100 rounded">
                        <Link href="https://www.linkedin.com/in/abdul-saboor-b57043288">
                          <FaLinkedin className=" text-xl cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out" />
                        </Link>
                      </li>

                      <li className="p-2 bg-gray-100 rounded">
                        <Link href="/Erorr404">
                          <FaYoutube className=" text-xl cursor-pointer hover:text-red-500  transition-all duration-300 ease-in-out" />
                        </Link>
                      </li>

                      <li className="p-2 bg-gray-100 rounded">
                        <Link href="https://www.linkedin.com/in/abdul-saboor-b57043288">
                          {" "}
                          <FaPinterest className="text-xl cursor-pointer hover:text-red-700 transition-all duration-300 ease-in-out" />
                        </Link>{" "}
                      </li>

                      <li className="p-2 bg-gray-100 rounded">
                        <Link href="https://www.instagram.com/sabor_110/profilecard/?igsh=bnFqMTg4MHAzOGp1">
                          <FaInstagram className=" text-xl cursor-pointer hover:text-red-300 transition-all duration-300 ease-in-out" />
                        </Link>{" "}
                      </li>

                      <li className="p-2 bg-gray-100 rounded">
                        <Link href="https://www.facebook.com/SaboorHaider110/">
                          <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500  transition-all duration-300 ease-in-out" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


      </div>
      <footer>
        <Footer />
      </footer>
    </div>

  );
};

export default Page;
