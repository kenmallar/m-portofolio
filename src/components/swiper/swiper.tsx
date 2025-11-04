import { A11y, Autoplay, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import type { FC } from "react";
import "swiper/css";
import "swiper/css/autoplay";
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
      // install Swiper modules
      modules={[Scrollbar, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      scrollbar={{ draggable: true }}
    >
      {pictures.map((p: string) => (
        <SwiperSlide>
          <img src={p} alt={projectName} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
