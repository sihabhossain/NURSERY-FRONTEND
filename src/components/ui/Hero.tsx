import { Button } from "@/components/ui/button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="p-8 bg-[#f9f4ef] h-60vh sm:h-auto">
      <Container>
        <div className="flex flex-col sm:flex-row gap:10 items-center justify-between">
          <div className="space-y-4 max-w-[50%] sm:w-[45%]">
            <h1 className="text-4xl sm:text-5xl font-bold text-left">
              65% OFF
              <br />
              NEW PLANT
            </h1>
            <p className="text-lg text-muted-foreground text-left">
              Pronia, With 100% Natural, Organic & Plant Shop.
            </p>
            <Button className="bg-[#a4d65e] text-white">DISCOVER NOW</Button>
          </div>
          <div className="relative w-[50%] sm:w-[55%]">
            <img
              src="https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png"
              alt="Plant"
              className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
