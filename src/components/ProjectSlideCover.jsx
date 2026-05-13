/**
 * Home projects slider — left column: two mobile mockups in a shallow V; images use contain so full device shots stay visible.
 */
function getSlideShots(project) {
    const m = project.mockups;
    if (!m?.length) return null;
    if (m.length >= 2) return [m[0], m[1]];
    return [m[0], m[0]];
}

export default function ProjectSlideCover({ project, title }) {
    const shots = getSlideShots(project);
    const from = project.detailTheme?.accentFrom ?? '#ff8660';
    const to = project.detailTheme?.accentTo ?? '#9a33ff';
    const vars = { '--ps-accent-from': from, '--ps-accent-to': to };

    if (!shots) {
        const src = project.image || project.thumb;
        if (!src) return null;
        return (
            <div className="projectSlideCover" style={vars}>
                <div className="projectSlideCoverGlow projectSlideCoverGlow--media" aria-hidden />
                <img
                    src={src}
                    alt={title}
                    className="projectSlideSingleFallback"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        );
    }

    const [a, b] = shots;

    return (
        <div className="projectSlideCover" style={vars}>
            <div className="projectSlideCoverGlow projectSlideCoverGlow--media" aria-hidden />
            <div className="projectSlideShotStage">
                <figure className="projectSlideShot projectSlideShot--vLeft">
                    <img
                        src={a.src}
                        alt={a.alt || `${title} — screen 1`}
                        loading="lazy"
                        decoding="async"
                    />
                </figure>
                <figure className="projectSlideShot projectSlideShot--vRight">
                    <img
                        src={b.src}
                        alt={b.alt || `${title} — screen 2`}
                        loading="lazy"
                        decoding="async"
                    />
                </figure>
            </div>
        </div>
    );
}
