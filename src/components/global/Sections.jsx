import React, { Fragment } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';

export default () => (
    <Fragment>
        <Hero />
        <About />
        <Experience />
        <Skills />
    </Fragment>
);
