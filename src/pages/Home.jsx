import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Autoplay from "embla-carousel-autoplay";
import {categories} from '../assets/category'
import Cards from "./Cards";
import slider from "@/assets/slider.js";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useContextCart } from "@/context/CardContext";
export default function Home(){
   const { obj } = useContextCart();
  const products=obj.products
  const [randomProducts, setRandomProducts] = useState([]);
  useEffect(() => {
    if(products.length>0){
    let indexProducts = [];
    for (let index = 0; index < 30; index++) {
      indexProducts.push(Math.floor(Math.random() * 52));
    }
  indexProducts = [...new Set(indexProducts)];
  const selected = indexProducts.map((i) => products[i]);
    setRandomProducts(selected);
  }
}, [products])
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  return (
    <div className=" overflow-hidden mb-10">
      <Carousel plugins={[plugin.current]} className="w-screen relative">
        <CarouselContent>
          {slider.map((slide) => (
            <CarouselItem key={slide.id} className="relative">
              <div className="w-screen h-[400px]">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">{slide.desc}</p>
              </div>
            </CarouselItem>
            // <CarouselItem key={slide.id} className="relative">
            //   <div className="w-screen h-[400px] md:h-[400px] object-cover grid grid-rows-2 grid-cols-4 gap-2">
            //     <div className="row-start-1 row-end-3 col-start-1 col-end-3 ">
            //       <img
            //         src={slide.img1}
            //         alt={slide.title}
            //         className="w-full h-full object-cover"
            //       />
            //     </div>
            //     <div className="  row-start-1 row-end-2 col-start-3 col-end-5 ">
            //       <img
            //         src={slide.img2}
            //         alt={slide.title}
            //         className="w-full h-full object-cover"
            //       />
            //     </div>
            //     <div className=" row-start-2 row-end-3 col-start-3 col-end-4 ">
            //       <img
            //         src={slide.img3}
            //         alt={slide.title}
            //         className=" w-full h-full object-cover"
            //       />
            //     </div>
            //     <div className=" row-start-2 row-end-3 col-start-4 col-end-5 ">
            //       <img
            //         src={slide.img4}
            //         alt={slide.title}
            //         className="w-full h-full object-cover"
            //       />
            //     </div>
            //   </div>

            // <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
            //   <h2 className="text-3xl md:text-5xl font-bold mb-4">
            //     {slide.title}
            //   </h2>
            //   <p className="text-lg md:text-xl mb-6">{slide.desc}</p>
            //   <button className="hover:bg-white hover:text-black px-6 rounded-full py-2  font-semibold backdrop-blur text-white border-2">
            //     Shop Now
            //   </button>
            // </div>
            // </CarouselItem>
          ))}
        </CarouselContent>

        {/* Prev/Next Buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full shadow-md" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full shadow-md" />
      </Carousel>
      <div>
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Top Categories
          </h2>
          <Marquee pauseOnHover={true} speed={50}>
            <div
              className="grid grid-flow-col auto-cols-max gap-6 overflow-x-auto px-3 pt-1.5 "
              style={{ scrollbarWidth: "none" }}
            >
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="relative font-serif w-36 h-44 group cursor-pointer hover:-translate-y-1.5 duration-300"
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-36 h-44 object-cover rounded-lg shadow-md transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.name}
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </section>
      </div>
      <div>
        <Cards products={randomProducts} />
      </div>
    </div>
  );
}
