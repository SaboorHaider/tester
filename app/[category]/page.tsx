import { client } from '../../sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Define the FoodItem interface
// Define food type
type Food = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  description: string;
  available: boolean;
};

const page = async ({ params }: { params: { category: string } }) => {
  const foods: Food[] = await client.fetch(
    `*[_type == "food"] {
            _id,
            name,
            category,
            price,
            originalPrice,
            tags,
            "imageUrl": image.asset->url,
            description,
            available,
          }`,
    { category: params.category }
  );

  return (
    <div className='mb-[50px]'>
      <h1 className='font-extrabold p-[10px] mt-[30px] text-[40px] text-yellow-600 font-greatVibes flex justify-center'>
        {params.category}s
      </h1>
      <div className='px-14 flex gap-[20px]'>
        {foods.map((food) => (
          <div key={food._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              {food.originalPrice > food.price && (
                <p className="bg-black p-1 font-bold text-white absolute top-[6%] transform -translate-y-1/2 right-0 text-[13px] rotate-0">
                  {Math.round(((food.originalPrice - food.price) / food.originalPrice) * 100)}% OFF
                </p>
              )}
              <Image
                src={food.imageUrl}
                alt={food.name}
                width={200}
                height={200}
                className="object-cover object-center w-full h-full block"
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {food.name}
              </h2>
              <p className='line-clamp-1'>{food.description}</p>
              <div className='flex py-2 justify-between px-[15px]'>
                <p className='text-[17px] text-bordercoloryello font-bold'>${food.originalPrice}</p>
                <div className='flex gap-2'>
                  <p className="line-through font-semibold text-red-600">${food.price}</p>
                  {food.originalPrice > food.price && (
                    <p className="text-[15px]">
                      {Math.round(((food.originalPrice - food.price) / food.originalPrice) * 100)}% OFF
                    </p>
                  )}
                </div>
              </div>
              <Link href={`/shop/${food._id}`}>
                <button className='bg-bordercoloryello text-whitetext p-2'>View Product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
