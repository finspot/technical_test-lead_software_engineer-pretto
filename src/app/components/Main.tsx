import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from "./Card";
import { CARDS } from "./constants";

/**
 * main content of the page
 */
export const Main = () => (
  <main className="pt-16">
    <Slider
      arrows={false}
      centerMode
      centerPadding="20px"
      className="justify-center md:flex md:space-x-6"
      dots
      dotsClass="slick-dots pretto-dots"
      infinite={false}
      responsive={[
        { breakpoint: 1024, settings: {} },
        { breakpoint: 10000, settings: "unslick" },
      ]}
    >
      {CARDS.map(({ content, headline, href, title }, i) => (
        <Card
          key={title}
          className={i < CARDS.length - 1 ? "mr-5" : ""}
          content={content}
          headline={headline}
          href={href}
          title={title}
        />
      ))}
    </Slider>
  </main>
);
