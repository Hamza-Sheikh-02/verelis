import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-[#200B3D] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>(123) 456-789</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={14} />
            <span>email@example.com</span>
          </div>
        </div>

        <div className="hidden sm:flex">
          <p className="font-medium">
            New Arrivals —{" "}
            <Link href="/shop" className="hover:text-gray-300">
              Shop Now
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden sm:inline">Follow Us :</span>
          <div className="flex gap-2">
            <Link href="#">
              <Instagram
                size={16}
                className="cursor-pointer hover:text-gray-300"
              />
            </Link>
            <Link href="#">
              <Youtube
                size={16}
                className="cursor-pointer hover:text-gray-300"
              />
            </Link>
            <Link href="#">
              <Facebook
                size={16}
                className="cursor-pointer hover:text-gray-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
