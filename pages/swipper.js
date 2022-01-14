import React, { useState } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "../styles/Swipper.module.scss";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const images = [
  {
    src: "https://swiperjs.com/demos/images/nature-1.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
  {
    src: "https://swiperjs.com/demos/images/nature-2.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
  {
    src: "https://swiperjs.com/demos/images/nature-3.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
  {
    src: "https://swiperjs.com/demos/images/nature-4.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
  {
    src: "https://swiperjs.com/demos/images/nature-5.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
  {
    src: "https://swiperjs.com/demos/images/nature-6.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
  {
    src: "https://swiperjs.com/demos/images/nature-7.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
  {
    src: "https://swiperjs.com/demos/images/nature-8.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
  {
    src: "https://swiperjs.com/demos/images/nature-9.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
  {
    src: "https://swiperjs.com/demos/images/nature-10.jpg",
    caption: {
      p1: "Our Toddler Room is full of fun activities for kids between the ages of 12 months - 3.5 years!",
      p2: "Photo Source: Blue Bird Preschool",
    },
  },
];

export default function Swipper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="POC swipper gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.gallery}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            className={`${styles.swiper} ${styles.photoFullSize}`}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <img src={image.src} />
                <div className={styles.caption}>
                  <p>{image.caption.p1}</p>
                  <p>{image.caption.p2}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView={"auto"}
            freeMode={true}
            watchSlidesProgress={true}
            className={`${styles.swiper} ${styles.thumbnails}`}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
