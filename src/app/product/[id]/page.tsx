// 'use client'
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

import React, { useState, useEffect } from "react";

import ProductCard from "../../../components/ProductCard";
import { json } from "stream/consumers";

type Props = {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     // read route params
//     const id = (await params).id

//     // let post = await fetch('/${id}').then((data) => data.json())

//     return {
//         title: 'post.title',
//         description: 'description Product'
//         openGraph: {
//           images: ['/some-specific-page-image.jpg', ...previousImages],
//         },
//     }
// }

export default async function ProductDetal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Product Detail

  // await fetch('http://localhost:3001/products', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //         userId: 1, title, completed: false
  //     })

  //     revalidatePath('/')
  // })

  const productId = (await params).id;

  // const [productType, setProductType] = useState('posts')
  // const [items, setItems] = useState([])

  // useEffect(() => {
  //     fetch(`http://localhost:3001/products/${productType}`)
  //         .then(response => response.json())
  //         .then(json => setItems(json))
  // }, [productType])

  return (
    <main>
      <div className="container mx-auto">
        <h1>Product {productId}</h1>
        {/* <ProductCard /> */}
      </div>
    </main>
  );
}
