// src/components/SiteNav.tsx

const SiteNav = () => {
    return (
    <nav>
        
        
        <ul className="site-name">
            <li key='title'><img src="/my_face_2.jpg" 
        style = {{ borderRadius:'50%', backgroundColor: 'white', height:'50px', width: '50px', marginRight: '10px'}}
        alt="Logo" 
        className="logo" /><strong>Adeola Bannis</strong></li>
        </ul>
        <ul>
            <li key="home"><a href="/">Home</a></li>
            <li key="blog"><a href="/blog">Blog</a></li>
            <li key="services"><a href="/services">Work With Me</a></li>
        </ul>
    </nav>
    );
}

export default SiteNav;