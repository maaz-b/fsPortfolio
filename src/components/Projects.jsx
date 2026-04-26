import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Gap from './Gap.jsx';
import { projects } from '../constants/projectsData.js';

/** Home carousel only — keep Nfters off the landing slide strip. */
const HOME_CAROUSEL_PROJECTS = projects.filter((p) => p.id !== 'nfters');

function carouselSlideImage(project) {
    if (project.id === 'salah-pro' || project.id === 'myskool') {
        return project.thumb;
    }
    return project.image;
}

function overlayClassForId(id) {
    if (id === 'salah-pro') return 'salahPO';
    if (id === 'myskool') return 'myskoolPO';
    if (id === 'quranly') return 'quranlyPO';
    if (id === 'scope-inspect') return 'scopePO';
    if (id === 'nextride') return 'nextridePO';
    if (id === 'street-sense-media') return 'streetSensePO';
    return 'myskoolPO';
}

function ProjectCard({ image, title, caption, isActive, projectId }) {
    return (
        <Link to={`/projects/${projectId}`} className="projectCardLink">
            <div className="projectCard">
                <div className="projectImageWrapper">
                    <img className="projectImage" src={image} alt={title} />
                    <div
                        className={`projectOverlay ${isActive ? 'show' : ''} ${overlayClassForId(projectId)}`}
                    >
                        <div className="projectOverlayGlass">
                            <p className="projectOverlayText">
                                <span className="introBoldText">{title}</span>
                                <span className="projectOverlaySub">{caption}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <Gap size={20} orientation="vertical" />
            </div>
        </Link>
    );
}

export default function ProjectsCarousel() {
    return (
        <div className="projectsCarouselContainer">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={18}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1.04,
                        spaceBetween: 22,
                    },
                    1024: {
                        slidesPerView: 1.08,
                        spaceBetween: 28,
                    },
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
                className="projectsSwiper"
            >
                {HOME_CAROUSEL_PROJECTS.map((project) => (
                    <SwiperSlide key={project.id}>
                        {({ isActive }) => (
                            <ProjectCard
                                image={carouselSlideImage(project)}
                                title={project.title}
                                caption={project.carouselCaption ?? project.tagline}
                                isActive={isActive}
                                projectId={project.id}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
