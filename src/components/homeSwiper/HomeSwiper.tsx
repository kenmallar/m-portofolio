import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { FC } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "swiper/css/scrollbar";
import "./homeSwiper.css";

type Props = {
  projects: any;
};

export const HomeSwiper: FC<Props> = ({ projects }) => {
  return (
    <Swiper
      className="home-swiper"
      modules={[Scrollbar, Pagination, Autoplay, A11y]}
      speed={500}
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        1025: {
          slidesPerView: 3,
        },
      }}
      autoplay
      pagination={{ enabled: true, clickable: true }}
      loop
    >
      {projects.map((p: any) => (
        <SwiperSlide>
          <a href={`projects/` + p.project}>
            <img src={p.cover} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
