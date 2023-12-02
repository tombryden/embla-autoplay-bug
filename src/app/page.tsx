"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

function Slide({ num }: { num: number }) {
  return (
    <div
      style={{
        flex: "0 0 calc(50% - 20px)",
        minWidth: 0,
        border: "1px solid red",
        height: "100px",
        marginRight: "20px",
      }}
    >
      Slide {num}
    </div>
  );
}

export default function Home() {
  const [emblaRef] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      align: "start",
      loop: true,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div>
      <div ref={emblaRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex" }}>
          <Slide num={1} />
          <Slide num={2} />
          <Slide num={3} />
          <Slide num={4} />
          <Slide num={5} />
          <Slide num={6} />
        </div>
      </div>
    </div>
  );
}
