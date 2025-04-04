// src/components/SiteNav.tsx

const SiteNav = () => {
    return (
    <nav>
        <ul className="site-name">
            <li key='title'><strong>Adeola Bannis</strong></li>
        </ul>
        <ul>
            <li key="home"><a href="/">Home</a></li>
            <li key="blog"><a href="/blog">Blog</a></li>
            <li key="about-me"><a href="/about">About Me</a></li>
        </ul>
    </nav>
    );
}

export default SiteNav;