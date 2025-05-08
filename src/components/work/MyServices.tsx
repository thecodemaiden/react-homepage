// src/components/work/MyServices.tsx
import React from 'react';

const MyServices = () => {
    return (
        <div className='services-main'>
            <article>
            <div id="services-intro">
                <p>
                Do you have an idea for an embedded sensing device, a research project, or a software application?
                I can help you bring it to life! I specialize in building custom software and hardware solutions, as well as writing compelling proposals for research funding.
                </p>
            </div>
            <div id="services-development">
                <h2>Application & Software Development</h2>
                <p>
                I build scalable, intelligent systems that bridge hardware and software. I can help with:
                <ul>
                    <li>Embedded device prototypes</li>
                    <li>Custom backend APIs</li>
                    <li>ML models for sensor fusion</li>
                    <li>Test coverage, profiling and code review</li>
                </ul>
                </p>
            </div>
            </article>
        </div>
    );
};

export default MyServices;

