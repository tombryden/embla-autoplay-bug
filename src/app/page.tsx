"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

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
      loop: true,
      slidesToScroll: 1,
      align: "start",
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
      <Link href="/another">Another Page</Link>

      <div ref={emblaRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex" }}>
          <Slide num={1} />
          <Slide num={2} />
        </div>
      </div>
    </div>
  );
}
