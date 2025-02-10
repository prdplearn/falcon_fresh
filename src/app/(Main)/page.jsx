import { coffee_img, JuiceImg } from "@/assets/images";
import CategorySlider from "@/components/CategorySlider";
import HeroBanner from "@/components/HeroBanner";
import HomeAdSection from "@/components/HomeAdSection";
import Importancy from "@/components/Importancy";
import Newsletter from "@/components/Newsletter";
import ProductFilter from "@/components/ProductFilter";
import ProductSlider from "@/components/ProductSlider";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";


export default async function Home() {
  return (
    <main className="">
      <Wrapper className="py-8">
        <HeroBanner />
        <CategorySlider />
        <ProductSlider />
        <HomeAdSection />
        <ProductFilter />
        <section className="adsection py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full relative">
              <Image src={coffee_img} className="w-full rounded-lg" width={300} height={300} alt="Coffee" quality={100} />
              <div className="flex w-full  absolute top-0 left-0 p-8 h-full flex-col gap-3 2xl:gap-5 justify-center items-start">
                <h2 className="lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-black">Pure Coffee <br />
                  Big discount</h2>
                <p className="lg:text-sm 2xl:text-2xl text-[#6F6764]">Save up to 50% off on your <br /> first order</p>
                <div>
                  <Button className="bg-[--Teal] rounded-full">Shop Now</Button>
                </div>
              </div>
            </div>
            <div className="w-full relative">
              <Image src={JuiceImg} className="w-full rounded-lg" width={300} height={300} alt="Coffee" quality={100} />
              <div className="flex w-full  absolute top-0 left-0 p-8 h-full flex-col gap-5 justify-center items-start">
                <h2 className="lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-black mb-10">Delivered to <br />your home</h2>
         
                <div>
                  <Button className="bg-[--Teal] rounded-full">Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductFilter />
        <Newsletter/>
        <Importancy/>

      </Wrapper>

    </main>
  );
}
