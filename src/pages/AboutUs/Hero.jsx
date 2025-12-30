
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "./Hero.css"
import SlideOne from "../../assets/AboutPage/slide_one.jpg";
import SlideTwo from  "../../assets/AboutPage/slide_two.jpg";
import SlideThree from "../../assets/AboutPage/slide_three.jpg";
import SlideFour from "../../assets/AboutPage/slide_four.jpg";

const Hero = () => {
  const carouselImages = [
   SlideOne,
   SlideTwo,
   SlideThree,
   SlideFour
  ]

  return (
    <section className="hero">
      <div className="hero-container">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          className="hero-swiper"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide">
                <img src={image || "/placeholder.svg"} alt={`Team slide ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Hero
