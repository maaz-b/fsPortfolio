import { Link } from 'react-router-dom';

export function ButtonRow() {
    return (
        <div className="row buttonRow">
            <Link className="buttonPrimary buttonLink" to="/contact">
                Get In Touch
            </Link>
            <button className="buttonSecondary">Download CV</button>
        </div>
    );
}

export function ProjectsButtonRow() {
    return (
        <div className="row buttonRow">
            <Link className="buttonSecondary buttonLink" to="/projects">
                See All Projects
            </Link>
        </div>
    );
}
