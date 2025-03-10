"use client";
import Image from "next/image";
import styles from "../../components/Demo1.module.css";
import { useState, useEffect } from "react";

/**
 * http://localhost:3000/lessons/demo2
 */

export default function Demo2() {
  // const [count, setCount] = useState(0)

  // const handleScroll = () => {
  //   setCount(count + scrollY)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // })

  const productId = 1;

  // const initialvalues = {
  //   dataType: 'products',
  //   productId: ""
  // };

  interface Item {
    id: number;
    name: string;
  }

  const [productType, setProductType] = useState(productId);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // fetch(`http://localhost:3001/products/${productType}`)
    // fetch(`http://localhost:3001/${productType}`)
    fetch(`http://localhost:3001/api-products?id=${productId}}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [productId]);

  return (
    <>
      {/* <div className={styles.card}>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <p>You have moved {count} posts</p>
            <button onClick={() => setCount(count + 1)}>
              Move 1 spot
            </button>
          </main>
        </div>
      </div> */}

      <div>
        <button onClick={() => setProductType(productId)}>Posts</button>
        <button onClick={() => setProductType(productId)}>Users</button>
        <button onClick={() => setProductType(productId)}>Todos</button>
        <h1>{productId}</h1>
        {items.map((item) => {
          return <span key={item.id}>{JSON.stringify(item.name)}</span>;
        })}
      </div>
    </>
  );
}
