// src/components/MainPage.tsx
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const MainPage = () => {
    return (
        <div>
            <article>
            <div id="intro">
            <h1>About Me</h1>
                <p> 
                    Hi there! I'm Adeola, and I love to make things. I mainly make software and
                    embedded device prototypes, but I sometimes make crochet plushies or write science fiction.
                </p>
                <p> 
                    I also love to learn. 
                    Right now, I'm learning about front-end web development with React, and AI agent architecture. 
                </p>
                <p>
                    Check out my <a href="/blog">blog</a> for my latest projects and experiments!
                </p>
            </div>
            <div id="socials">
                <SocialIcon url="https://www.linkedin.com/in/adeolabannis/"/>
                <SocialIcon url="https://www.github.com/thecodemaiden"/>
            </div>
            </article>
        </div>
    );
};

export default MainPage;

