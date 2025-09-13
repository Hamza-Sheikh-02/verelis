import Image from "next/image";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "Outfit 1",
    description: "Lorem ipsum dolor sit amet",
    imageSrc: "/images/men-1.png",
  },
  {
    id: 2,
    name: "Outfit 2",
    description: "Lorem ipsum dolor sit amet",
    imageSrc: "/images/men-2.png",
  },
  {
    id: 3,
    name: "Outfit 3",
    description: "Lorem ipsum dolor sit amet",
    imageSrc: "/images/men-3.png",
  },
  {
    id: 4,
    name: "Outfit 4",
    description: "Lorem ipsum dolor sit amet",
    imageSrc: "/images/men-4.png",
  },
  {
    id: 5,
    name: "Outfit 5",
    description: "Lorem ipsum dolor sit amet",
    imageSrc: "/images/men-5.png",
  },
  {
    id: 6,
    name: "Outfit 6",
    description: "Lorem ipsum dolor sit amet",
    imageSrc: "/images/men-6.png",
  },
  {
    id: 7,
    name: "Outfit 7",
    description: "Lorem ipsum dolor sit amet",
    imageSrc: "/images/men-7.png",
  },
  {
    id: 8,
    name: "Outfit 8",
    description: "Lorem ipsum dolor sit amet",
    imageSrc: "/images/men-8.png",
  },
];

export function BestSellers() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-500">
            Featured Products
          </h3>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            BEST SELLING PRODUCTS
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-50 rounded-xl p-6 text-center shadow-lg transition-shadow hover:shadow-2xl">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={400}
                  height={600}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                <Button className="mt-4 bg-[#200B3D] text-white hover:bg-[#3b2a5e]">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
