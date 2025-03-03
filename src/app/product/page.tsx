import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

export default async function ProductList({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Product Index

  const products = await fetch("http://localhost:3001/products").then((res) =>
    res.json(),
  );

  return (
    <main>
      <div className="container mx-auto">
        <h1>Product List</h1>
        {/* <ProductCard /> */}
        <ul>
          {/* {products.map(product => <li><Link href='product/[id]' as={`product/${product.id}`}>{product.name}</Link></li>)} */}
          {products.map((product) => (
            <li>
              <Link href={`product/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
