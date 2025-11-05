import { A11y, Autoplay, FreeMode, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { FC } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
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
      modules={[Scrollbar, Autoplay, FreeMode, A11y]}
      spaceBetween={0}
      speed={10000}
      slidesPerView={1}
      scrollbar={{ draggable: true, hide: true }}
      autoplay={{ delay: 0 }}
      freeMode
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
