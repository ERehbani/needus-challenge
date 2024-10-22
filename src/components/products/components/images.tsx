import { Card, CardContent } from "@/components/ui/card";
import detailProduct1 from "/public/detailProduct1.png";
import detailProduct2 from "/public/detailProduct2.png";
import detailProduct3 from "/public/detailProduct3.png";
import productImg from "/public/productImg.png";
import { useState } from "react";

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(productImg);

  const thumbnails = [
    { src: productImg, alt: "LG C2 42 image 1" },
    { src: detailProduct1, alt: "LG C2 42 image 2" },
    { src: detailProduct2, alt: "LG C2 42 image 3" },
    { src: detailProduct3, alt: "LG C2 42 image 4" },
  ];

  const handleThumbnailClick = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <div className="w-full flex gap-3 max-lg:flex-col">
      <div className="flex flex-col w-[150px] max-lg:w-3/4 mt-4 max-lg:flex-row max-lg:justify-around">
        {thumbnails.map((thumbnail, index) => (
          <Card key={index} className="w-full mb-2 max-lg:mb-0">
            <CardContent className="p-2">
              <button
                onClick={() => handleThumbnailClick(thumbnail.src)}
                className="w-full h-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  className="w-full h-auto"
                />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="w-full h-fit p-0 border-none shadow-none">
        <CardContent className="p-4 space-y-4 bg-[#f1f1f1]">
          <img
            src={selectedImage}
            alt="LG C2 42 4K Smart OLED TV"
            className="w-full h-auto"
          />
          <p className="text-[#6f6f6f] text-sm">
            *LG C2 42 (106cm) 4K Smart OLED evo TV
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Images;
