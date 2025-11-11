import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { FC } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./gallerySwiper.css";

type Props = {
  projectName: string;
  pictures: string[];
};

export const GallerySwiper: FC<Props> = ({ pictures, projectName }) => {
  return (
    <Swiper
      className="gallery-swiper"
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={50}
      speed={1000}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      pagination={{ enabled: true, clickable: true }}
      loop
    >
      {pictures.map((p: string) => (
        <SwiperSlide>
          <img src={p} alt={projectName} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
