"use client"

import { CheckCircle2, Star } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

// Generating the array based on the 15 images we found (1.jpg to 15.jpg)
const approvedStudents = Array.from({ length: 15 }, (_, i) => ({
  image: `/NovaFafe-Facebook/Aprovados/${i + 1}.jpg`
}))

export function RecentApprovals() {

  return (
    <section className="py-24 lg:py-32 bg-gray-50 overflow-hidden relative border-t border-gray-100">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -mr-40 -mt-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4 tracking-tight">
             Os Nossos <span className="text-primary">Aprovados</span>
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Todos os dias celebramos novas conquistas. Estes são alguns dos alunos que já garantiram a sua liberdade na estrada com a NOVAFAFE.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        
        {/* Soft Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-24 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-24 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none" />

        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            slideToClickedSlide={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.2,
                slideShadows: false,
            }}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="approved-swiper !pb-10"
        >
            {approvedStudents.map((student, index) => (
                <SwiperSlide key={index} className="!w-[200px] !h-[280px] sm:!w-[240px] sm:!h-[320px] mx-2 transition-all duration-300">
                    <div className="slide-content w-full h-full rounded-xl overflow-hidden bg-white transition-all duration-300 border border-gray-100 shadow-md relative">
                        <img
                            src={student.image}
                            alt={`Aluno aprovado ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay - na base da foto e centralizado horizontalmente */}
                        <div className="overlay absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent pt-12 pb-6 opacity-0 transition-opacity duration-500 flex items-center justify-center">
                            <div className="content-transform transform translate-y-4 transition-transform duration-500 flex items-center gap-2">
                                <CheckCircle2 className="h-6 w-6 text-white stroke-[2.5px]" />
                                <span className="text-white font-bold text-lg tracking-wider">APROVADO</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Button centered below */}
      <div className="text-center mt-12 relative z-10">
        <a 
          href="https://www.facebook.com/ecnovafafe/photos" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-primary bg-white border-2 border-primary/20 rounded-full hover:bg-primary hover:text-white hover:border-primary shadow-lg shadow-primary/5 transition-all duration-300 active:scale-95"
        >
          Ver mais no Facebook
        </a>
      </div>

    <style jsx global>{`
        /* Active slide styling */
        .swiper-slide-active .slide-content {
            border: 2px solid hsl(var(--primary));
            box-shadow: 0 25px 50px -12px rgba(var(--primary-rgb), 0.5);
            transform: scale(1.02);
            filter: grayscale(0) brightness(1);
        }
        
        .swiper-slide-active .overlay {
            opacity: 1;
        }
        
        .swiper-slide-active .content-transform {
            transform: translateY(0);
        }

        /* Perspective and layout fixes */
        .approved-swiper {
            padding-bottom: 80px !important;
            padding-top: 40px !important;
        }

        .swiper-wrapper {
            align-items: center;
        }

        .swiper-slide {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            filter: grayscale(1) brightness(1.1);
        }

        .swiper-slide-active {
            filter: grayscale(0) brightness(1);
            z-index: 50;
        }

        /* Refined shadow projection for the container */
        .approved-swiper::after {
            content: '';
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            width: 300px;
            height: 20px;
            background: rgba(0,0,0,0.1);
            filter: blur(20px);
            border-radius: 100%;
            z-index: 0;
            pointer-events: none;
        }
    `}</style>
    </section>
  )
}
