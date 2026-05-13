import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Gap from './Gap.jsx';
import ProjectSlideCover from './ProjectSlideCover.jsx';
import { getProjectById } from '../constants/projectsData.js';

/** Explicit home swiper lineup (four projects with paired mockups). */
const HOME_SLIDER_PROJECT_IDS = ['quranly', 'myskool', 'scope-inspect', 'legit-rides'];

const featuredProjects = HOME_SLIDER_PROJECT_IDS.map((id) => getProjectById(id)).filter(Boolean);

function ProjectCard({ title, caption, isActive, projectId, project }) {
    const from = project.detailTheme?.accentFrom ?? '#ff8660';
    const to = project.detailTheme?.accentTo ?? '#9a33ff';

    return (
        <Link to={`/projects/${projectId}`} className="projectCardLink">
            <div className="projectCard">
                <div
                    className="projectSlideShell"
                    data-active={isActive ? 'true' : 'false'}
                    style={{
                        '--ps-accent-from': from,
                        '--ps-accent-to': to,
                    }}
                >
                    <div className="projectSlideBoard">
                        <div className="projectSlideMedia">
                            <ProjectSlideCover project={project} title={title} />
                        </div>
                        <div className="projectSlideCopy">
                            <p className="projectSlideEyebrow">Featured project</p>
                            <h3 className="projectSlideHeading">{title}</h3>
                            <p className="projectSlideLead">{caption}</p>
                            <span className="projectSlideFoot">View case study</span>
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
                speed={900}
                loop={false}
                threshold={20}
                resistanceRatio={0.6}
                touchRatio={1}
                slideToClickedSlide={true}
                className="projectsSwiper"
            >
                {featuredProjects.map((project) => (
                    <SwiperSlide key={project.id}>
                        {({ isActive }) => (
                            <ProjectCard
                                project={project}
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
