import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Assets } from '../constants/assets.js';
import Gap from './Gap.jsx';

function ProjectCard({ image, title, description, isActive }) {
    return (
        <div className="projectCard">
            <div className="projectImageWrapper">
                <img className="projectImage" src={image} alt={title} />
                {/* Overlay */}
                <div className={`projectOverlay ${isActive ? 'show' : ''} ${title === "Salah Pro" ? 'salahPO' : title === "Nfters" ? 'nftersPO' : 'myskoolPO'}`}>
                    <p> <span className='introBoldText'>{title}</span> {description} </p>
                </div>
            </div>
            <Gap size={20} orientation="vertical" />
        </div>
    );
}

export default function ProjectsCarousel() {
    const projects = [
        {
            image: Assets.logos.salahproBanner,
            title: "Salah Pro",
            description: ": Alarms and Timer app with augmented reality powered compass, donational transactions and marketplace."
        },
        {
            image: Assets.logos.nftersBanner,
            title: "Nfters",
            description: ": A marketplace for buying and selling digital NFT assets with wallet integration."
        },
        {
            image: Assets.logos.myskoolBanner,
            title: "MySkool",
            description: ": School LMS platform with biometric attendance."
        }
    ];

    return (
        <div className='projectsCarouselContainer'>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 1.3,
                    }
                }}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                speed={1200}
                loop={false}
                threshold={20}
                resistanceRatio={0.6}
                touchRatio={1}
                slideToClickedSlide={true}
                className='projectsSwiper'
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                isActive={isActive}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
