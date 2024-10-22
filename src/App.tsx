
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Description from "./components/products/components/description";
import Details from "./components/products/components/details";
import Images from "./components/products/components/images";
import Related from "./components/products/components/related";
import Topbar from "./components/topbar";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <Topbar />

      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="py-12 bg-gray-200 flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-8">TV COLLECTION</h2>
        <div className="text-sm breadcrumbs mb-4">
          <span className="text-lg font-extralight">HOME / PRODUCT / TV COLLECTION</span>
        </div>
      </div>
      <main className="container mx-auto px-4">
        <div className="container w-[85%] mx-auto flex space-x-8 my-20 max-lg:flex-col max-lg:space-x-0">
          {/* Product Images */}

          <Images />
          {/* Product Details */}
          <Details />
        </div>
        <Description />
        <Related />
      </main>
      <Footer />
    </div>
  );
}
