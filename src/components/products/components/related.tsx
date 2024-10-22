import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";

const Related = () => {
  const relatedProducts = [
    {
      id: 1,
      name: "Sony BRAVIA XR Android Tv",
      price: 800.22,
      originalPrice: 1000.66,
      image:
        "/public/related1.png",
      tag: "NEW",
    },
    {
      id: 2,
      name: "Mi P1 Smart Android HD TV",
      price: 400.0,
      originalPrice: 450.0,
      image: "/public/related2.png",
      tag: "-10%",
    },
    {
      id: 3,
      name: "Konka OLED Android Tv",
      price: 700.0,
      originalPrice: 750.0,
      image: "/public/related3.png",
      tag: "HOT",
    },
    {
      id: 4,
      name: "TCL Roku Android Tv",
      price: 800.0,
      originalPrice: 850.0,
      image: "/public/related4.png",
      tag: "2 Years Warranty",
    },
  ];

  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold mt-12 mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card
            key={product.id}
            className="relative rounded-lg overflow-hidden border-none">
            <CardContent className="bg-gray-100 p-4">
            <div className="flex justify-between">
            <div className={`w-fit my-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded ${product.tag === "-10%" ? "bg-red-400" : product.tag === "HOT" ? "bg-yellow-400" : product.tag === "2 Years Warranty" && "bg-violet-400" }`} >
                {product.tag}
              </div>
              <button className=" bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-3/4 mx-auto h-48 object-cover my-10"
              />
              <div className="p-4 flex flex-col items-center">
                <Button
                  variant="outline"
                  className="mb-4 bg-white hover:bg-gray-100 text-gray-500 border-none w-1/2 mx-auto">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to cart
                </Button>
              </div>
            </CardContent>
            <div className="my-5 flex flex-col items-center">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <div className="flex items-center">
                <span className="font-bold text-xl">
                  ${product.price.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Related;
