import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            We'd love to hear from you! Whether you have a question about our
            products, an order, or anything else, our team is ready to answer
            all your questions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
            <form className="mt-6 space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={5} />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#200B3D] text-white hover:bg-[#3b2a5e]"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Our Address
              </h3>
              <p className="mt-2 text-gray-600">
                123 Fashion Street, Suite 100, New York, NY 10001
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Info
              </h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={18} />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={18} />
                  <span>email@example.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Business Hours
              </h3>
              <p className="mt-2 text-gray-600">Monday - Friday: 9am - 5pm</p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
