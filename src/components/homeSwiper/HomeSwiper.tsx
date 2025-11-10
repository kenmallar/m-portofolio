import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { FC } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "./homeSwiper.css";

type Props = {
  projects: any;
};

export const HomeSwiper: FC<Props> = ({ projects }) => {
  return (
    <Swiper
      className="home-swiper"
      modules={[Scrollbar, Navigation, Autoplay, A11y]}
      speed={1000}
      spaceBetween={50}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
        },
      }}
      navigation={{ enabled: true }}
      loop
    >
      {projects.map((p: any) => (
        <SwiperSlide>
          <a href={`projects/` + p.project}>
            <img src={p.cover} loading="lazy" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
