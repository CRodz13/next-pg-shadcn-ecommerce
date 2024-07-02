import ProductList from "@/components/shared/product/product-list";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import sampleData from '@/lib/sample-data'


export default function Home() {
  return (
    <div>
      <div className="space-y-8">
        <h2 className="h2-bold">Latest Products</h2>
        <ProductList data={sampleData.products} />
      </div>
    </div>
  );
}
