import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Men",
    href: "/shop/men",
    imageSrc: "/images/men.png",
  },
  {
    name: "Women",
    href: "/shop/women",
    imageSrc: "/images/women.png",
  },
  {
    name: "Kids",
    href: "/shop/kids",
    imageSrc: "/images/kids.png",
  },
];

export function Categories() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find What You Love
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  width={400}
                  height={600}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-center">
                <div className="rounded-md bg-white px-8 py-3 text-lg font-medium text-gray-900 shadow-lg">
                  <Link href={category.href} className="relative">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {category.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
