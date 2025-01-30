import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import React from 'react';
import { shopdetail } from "../../../data/data";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import AddToCart from "../../../components/Cart";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Page = async () => {
  const food = await client.fetch(
    `*[_type == "food"][0]{
      name,
      category,
      price,
      originalPrice,
      image,
      description,
      available,
      tags
    }`
  );

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
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0 lg:m-[70px] justify-center text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-2xl font-bold">Shop Details</h2>
            <div className="text-center justify-center items-center flex mt-1">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />
              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">Shop Details</Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-[100px] mb-[20px] container px-1 mx-auto ">
        {food ? (
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-14 mx-auto">
              <div className="lg:w-4/5 mx-auto flex ">
                <div className="flex gap-2">
                  <div>
                  </div>
                  <div>
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center"
                      src={urlFor(food.image).url()}
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <button className="text-sm title-font rounded-sm p-1 text-whitetext bg-bordercoloryello tracking-widest">
                    {food.available == true ? "In Stock" : "Out of Stock"}
                  </button>
                  <h1 className="text-gray-900 text-3xl title-font mb-1 pb-4 pt-1 font-bold">
                    {food.name}
                  </h1>
                  <p className="leading-relaxed text-[14px]">{food.description}</p>
                  <div className="flex flex-col gap-1 mt-6 items-start pb-5 border-b-2 border-gray-100 mb-5">
                    <div className='flex justify-between gap-6'>
                      <p className='text-[20px] text-bordercoloryello font-bold'>${food.originalPrice}</p>
                      <div className='flex gap-1'>
                        <p className="line-through text-[20px] font-semibold text-red-600">${food.price}</p>
                        {food.originalPrice > food.price && (
                          <p className="text-[15px]">
                            {Math.round(((food.originalPrice - food.price) / food.originalPrice) * 100)}% OFF
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='flex gap-5 text-[13px]'>
                      <h1 className='text-bordercoloryello flex'> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /></h1>
                      <div className='border-b font-semibold tracking-tight transition-colors first:mt-0 pt-[20px] scroll-m-20 ' />
                      <h1 className='leading-[16px]'>{food.rating} Rating</h1>
                      <div className='border-b font-semibold tracking-tight transition-colors first:mt-0 pt-[20px] scroll-m-20 ' />
                      <h1 className='leading-[16px]'>{food.review} Review</h1>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <AddToCart
                        product={{
                          id: food.id,
                          title: food.name,
                          price: food.price,
                          image: food.image,
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3 ">
                      <h1 className="flex leading-[15px] gap-[15px] text-[15px]"><IoMdHeartEmpty /> Add to Wishlist <IoIosGitCompare />Compare</h1>
                      <h1 className="leading-[15px] gap-[15px] text-[15px]">Category: {food.category} </h1>
                      <h1 className="leading-[15px] gap-[15px] text-[15px]">
                        Tags: {food.tags.map((tag: string, index: number) => (
                          <span key={index}>{tag}{index < food.tags.length - 1 ? ', ' : ''}</span>
                        ))}
                      </h1>
                    </div>
                    <div className="flex leading-[20px] gap-4 pt-3">
                      Share: <FaInstagram className="text-[20px]" /> <AiFillTwitterCircle className="text-[20px]" /> <FaFacebook className="text-[20px]" /> <AiFillTwitterCircle className="text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <p>Data not found for the given ID.</p>
        )}
      </div>
      {shopdetail.map((foodItem) => {
        return (
          <div key={foodItem.id} className="mt-[0px] mb-[100px] lg:w-4/5  px-12 mx-auto">
            <div className="flex gap-10">
              <button className="bg-bordercoloryello text-whitetext p-2 ">Description</button><button>Reviews (22)</button>
            </div>
            <div className="flex flex-col gap-4 text-[14px]">
              <p>{foodItem.description}</p>
              <p>{foodItem.senddespara}</p>
              <h1 className="font-bold text-[16px]">Key Benefits</h1>
              <p className="text-[13px]">. {foodItem.firstkeybenficts}</p>
              <p className="text-[13px]">. {foodItem.secondkey}</p>
              <p className="text-[13px]">. {foodItem.thirdkey}</p>
              <p className="text-[13px]">. {foodItem.fourthkey}</p>
              <p className="text-[13px]">. {foodItem.fiftkey}</p>
            </div>
          </div>
        );
      })}
      <div>
        <div className="my-[40px]">
          <h1 className="mx-14 font-bold text-[20px]">Similar Products </h1>
          <Link href={`/${food.category}`}>
          </Link>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
