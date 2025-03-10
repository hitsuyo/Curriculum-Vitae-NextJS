import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

/*
  URL: http://localhost:3000/product

  Nếu page lỗi, cancel server, npm run dev lại
*/

export default async function ProductList({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Product Index

  const products = await fetch("http://localhost:3001/api-products").then((res) =>
    res.json(),
  );

  /* Check thêm trường hợp API sai */

  return (
    <main>
      <div className="container mx-auto">
        <h1>Product List</h1>
        {/* <ProductCard /> */}
        <ul>
          {/* {products.map(product => <li><Link href='product/[id]' as={`product/${product.id}`}>{product.name}</Link></li>)} */}
          {products.map((product: { id: number, name: string }) => (
            <li>
              <Link href={`product/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
