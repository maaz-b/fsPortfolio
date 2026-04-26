import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const { pathname } = useLocation();

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const isHome = pathname === '/';

    return (
        <div className="appbar">
            <div className="row">
                {isHome ? (
                    <span className="item" onClick={() => scrollToSection('home')}>
                        Home
                    </span>
                ) : (
                    <Link className="item" to="/">
                        Home
                    </Link>
                )}
                <Link className="item" to="/projects">
                    Projects
                </Link>
                {isHome ? (
                    <span className="item" onClick={() => scrollToSection('experience')}>
                        Experience
                    </span>
                ) : (
                    <Link className="item" to="/#experience">
                        Experience
                    </Link>
                )}
                <Link className="item" to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
}
