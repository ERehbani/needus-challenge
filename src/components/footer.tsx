import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, MapPin, Phone, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2F333A] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Newsletter Section */}
        <div className="bg-rounded-lg my-8">
          <h2 className="text-2xl font-bold mb-2">Join our newsletter and get offers</h2>
          <p className="mb-4">Sign up our newsletter</p>
          <div className="flex">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow mr-2 bg-white text-gray-800" 
            />
            <Button className="bg-red-500 hover:bg-red-600">SUBSCRIBE</Button>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet.
            </p>
            <div className="flex mt-4 space-x-4">
              <Facebook className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
              <Youtube className="w-6 h-6" />
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Delivery information</li>
              <li>Privacy Policy</li>
              <li>Sales</li>
              <li>Terms & Conditions</li>
              <li>EMI Payment</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ACCOUNT</h3>
            <ul className="space-y-2 text-sm">
              <li>My Account</li>
              <li>My Orders</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Wishlist</li>
              <li>Account Details</li>
            </ul>
          </div>

          {/* Store */}
          <div>
            <h3 className="text-lg font-semibold mb-4">STORE</h3>
            <ul className="space-y-2 text-sm">
              <li>Affiliate</li>
              <li>Discounts</li>
              <li>Sale</li>
              <li>Contact</li>
              <li>All Collections</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <p className="text-sm mb-2">If you have any query, please contact us</p>
            <p className="text-sm text-red-500 mb-4">needus24@gmail.com</p>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-sm">California, USA</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span className="text-sm">+12012987481</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>Copyright. 2023 All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}