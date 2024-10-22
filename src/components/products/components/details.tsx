import { Button } from "@/components/ui/button";
import { useState } from "react";

const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("106 cm (42)");
  

  const sizes = [
    "106 cm (42)",
    "121 cm (48)",
    "139 cm (55)",
    "164 cm (65)",
    "196 cm (77)",
    "210 cm (83)",
  ];

  return (
    <div className="w-1/2 space-y-5 max-md:w-full">
      <div>
        <p className="text-gray-600 mb-4">Brand: LG</p>
        <p className="text-gray-600 mb-4">Model: OLED42C2PSA</p>
        <p className="text-gray-600 mb-4">Availability: Only 2 in Stock</p>
      </div>
      <h3 className="text-3xl mb-4">
        LG C2 42 (106CM) 4K SMART OLED EVO TV | WEBOS | CINEMA HDR
      </h3>
      <div className="flex items-center mb-4">
        {[1, 2, 3].map((star) => (
          <svg
            key={star}
            className="w-10 h-10 text-[#E73C17]"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <ul className="list-disc list-inside mb-4">
        <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
        <li>
          Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
        </li>
        <li>Hands-free Voice Control, Always Ready</li>
        <li>
          Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
        </li>
        <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
      </ul>
      <div className="grid grid-cols-3 gap-4">
        {sizes.map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? "outline" : "default"}
            className={
              selectedSize === size
                ? "border border-[#E73C17] text-[#E73C17]"
                : "text-gray-400"
            }
            onClick={() => setSelectedSize(size)}>
            {size}
          </Button>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center space-x-4 mb-4">
          <div className="flex flex-col justify-center gap-2 items-center">
            <p className="text-sm font-light">USD(incl. of all taxes)</p>
            <div className="flex items-center">
              <span className="text-2xl font-bold">$600.72</span>
              <span className="text-gray-500 line-through">$800.00</span>
            </div>
          </div>
          <div className="flex items-center border rounded w-48">
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </Button>
            <span className="px-4 w-full text-center">{quantity}</span>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <Button className="bg-[#E73C17] hover:bg-white hover:text-[#E73C17] hover:border hover:border-[#E73C17] text-white w-48 h-14">
            Buy Now
          </Button>
          <Button
            variant="outline"
            className=" hover:bg-[#E73C17] bg-white text-[#E73C17] border border-[#E73C17] hover:text-white w-48 h-14">
            Add to Cart
          </Button>
        </div>
      </div>
     
    </div>
  );
};

export default Details;
