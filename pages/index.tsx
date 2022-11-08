import Head from 'next/head'
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';

import { fetchData } from '../api';

export async function getServerSideProps(){
  let res = await fetchData();
  return {
    props: {
      data: res.data,
    },
  };
}

export default function Home({data}) {
  
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Head
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nisan's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero hero={data.hero} url={data.url}/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="workExperience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
}
