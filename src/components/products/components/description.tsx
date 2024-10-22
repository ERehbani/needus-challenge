import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Description = () => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-4/5 mx-auto">
      <TabsList className="grid w-full grid-cols-3 decoration-[#E73C17]">
        <TabsTrigger value="description" className="decoration">
          Description
        </TabsTrigger>
        <TabsTrigger value="specification">Specification</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent
        value="description"
        className="mt-4 h-48 max-md:h-60 overflow-y-auto">
        <Card className=" border-none shadow-none">
          <CardContent className="p-6 font-extralight">
            <p>
              The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around
              OLED TV we've tested. Although all OLEDs deliver similar fantastic
              picture quality, this one stands out for its value because it has
              many gaming oriented features that are great for gamers.
            </p>
            <p className="mt-4">
              *Only 65G2 is shown in the image for example purposes. All 2022 LG
              OLED models feature eco-friendly packaging.
            </p>
            <p className="mt-4">
              **65C2 Stand model is at a minimum 39% lighter than the C1 series.{" "}
              <span className="text-[#E73C17] cursor-pointer">More...</span>
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent
        value="specification"
        className="h-48 max-md:h-60 overflow-y-auto font-extralight">
        <Card className=" border-none shadow-none">
          <CardContent className="p-6">
            <p>Specification details would go here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reviews" className="h-48 max-md:h-60 overflow-y-auto font-extralight">
        <Card className=" border-none shadow-none">
          <CardContent className="p-6">
            <p>Customer reviews would go here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Description;
