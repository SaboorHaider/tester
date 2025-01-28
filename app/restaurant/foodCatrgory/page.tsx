import React from "react";
import Image from "next/image";
import Link from "next/link";

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: "/item1.png", label: "Save 50% on Fast Food" },
    { id: 2, img: "/item2.png", label: "Delicious Burgers" },
    { id: 3, img: "/item3.png", label: "Healthy Salads" },
    { id: 4, img: "/item4.png", label: "Desserts" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-[#FF9F0D] font-flower lg:text-[20px]">Food Category</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Ch</span>oose Food Item
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
        
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <Link href='/Shop'>
              <Image
                src={item.img}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer"
              />

              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-orange-500 font-semibold">
                  {item.label}
                </span>
              </div>
              </Link>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
