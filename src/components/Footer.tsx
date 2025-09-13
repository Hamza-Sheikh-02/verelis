import { Instagram, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#200B3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
            © {new Date().getFullYear()} Verelis, Inc. All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow Us:</span>
            <div className="flex gap-3">
              <Link href="#">
                <Instagram
                  size={18}
                  className="hover:text-gray-300 transition-colors"
                />
              </Link>
              <Link href="#">
                <Youtube
                  size={18}
                  className="hover:text-gray-300 transition-colors"
                />
              </Link>
              <Link href="#">
                <Facebook
                  size={18}
                  className="hover:text-gray-300 transition-colors"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
