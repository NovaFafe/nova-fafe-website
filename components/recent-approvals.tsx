"use client"

import { CheckCircle2, Star, Facebook } from "lucide-react"
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
    <section className="py-24 lg:py-32 bg-muted/30 overflow-hidden relative border-t border-border">
      
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
      <div className="relative w-full mx-auto">
        
        {/* Soft Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-muted/30 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-muted/30 to-transparent z-20 pointer-events-none" />

        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            slideToClickedSlide={true}
            coverflowEffect={{
                rotate: 0,
                stretch: -40,
                depth: 150,
                modifier: 1.2,
                slideShadows: false,
            }}
            loop={true}
            speed={800}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="approved-swiper !pb-14 !pt-4"
        >
            {approvedStudents.map((student, index) => (
                <SwiperSlide key={index} className="!w-[240px] !h-[340px] sm:!w-[280px] sm:!h-[400px] lg:!w-[340px] lg:!h-[480px] transition-all duration-300">
                    <div className="slide-content w-full h-full rounded-2xl overflow-hidden bg-card transition-all duration-300 shadow-xl relative">
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
          className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-white bg-[#1877F2] rounded-md hover:bg-[#166fe5] shadow-md transition-all duration-200 active:scale-95 group"
        >
          <Facebook className="h-4 w-4 fill-white" />
          <span className="border-l border-white/20 pl-2 ml-1">Ver mais no Facebook</span>
        </a>
      </div>

    <style jsx global>{`
        /* Active slide styling */
        .swiper-slide-active .slide-content {
            border: 2px solid hsl(var(--primary));
            box-shadow: 0 30px 60px -10px rgba(0,0,0,0.4), 0 0 0 2px hsl(var(--primary));
            transform: scale(1.05);
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
            filter: grayscale(0.6) brightness(0.95);
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
