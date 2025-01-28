"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Footer from "../../components/Footer";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  city: string;
  zipCode: string;
  address1: string;
  address2: string;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
  });
  const [setShowPopup] = useState(false);
  const [generatedUserId] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle form submission with type-safe event
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "30c787a3-d0e8-460d-8f5b-cc8e4228caed");
    formData.append("userId", generatedUserId);
    formData.append("fullName", `${userDetails.firstName} ${userDetails.lastName}`);
    formData.append("email", userDetails.email);
    formData.append("phone", userDetails.phone);
    formData.append("company", userDetails.company);
    formData.append(
      "address",
      `${userDetails.address1}, ${userDetails.address2}, ${userDetails.city}, ${userDetails.zipCode}, ${userDetails.country}`
    );
    formData.append("orderTotal", calculateTotal());
    const cartDetails = cartItems
      .map(
        (item) =>
          `${item.title} (Qty: ${item.quantity}, Price: $${(item.price * item.quantity).toFixed(2)})`
      )
      .join("\n");
    formData.append("cartItems", cartDetails);
    formData.append("orderStatus", "Order Confirmed");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        console.log("Email sent successfully:", result);
      } else {
        console.error("Failed to send email:", result);
      }
      setShowPopup(true);
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred. Please try again.");
    }
  };

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
            <h2 className="text-center text-2xl font-bold">Add To Cart</h2>
            <div className="text-center justify-center items-center flex mt-1">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />
              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">Cart</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-2 container py-8 lg:px-[180px] lg:mx-[40px] px-9 my-[50px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <input
                  name="phone"
                  type="tel"
                  id="phone"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  name="company"
                  type="text"
                  id="company"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.company}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.country}
                  onChange={handleInputChange}
                >
                  <option value="">Choose country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  id="city"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Zip code
                </label>
                <input
                  name="zipCode"
                  type="text"
                  id="zipCode"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.zipCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
                Address 1
              </label>
              <input
                name="address1"
                type="text"
                id="address1"
                className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={userDetails.address1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
                Address 2
              </label>
              <input
                name="address2"
                type="text"
                id="address2"
                className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={userDetails.address2}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-6 py-2 flex bg-orange-500 text-white shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12"
          >
            Submit
          </button>
          <h1>After Completing the order product will be proceed to your address within 1-2 hours. thanks for choosing us!</h1>
        </form>
      </div>

      <Footer />
    </div>
  );
}
