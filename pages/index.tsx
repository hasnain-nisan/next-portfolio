import Head from 'next/head'
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import ReactTooltip from "react-tooltip";
import { fetchData } from '../api';
import {MdHome} from 'react-icons/md'
import Link from 'next/link';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function getServerSideProps(){
  let res = await fetchData();
  return {
    props: {
      data: res.data,
    },
  };
}

type Props = {
  data: {
    hero: {
      tags: string;
      image: string;
    };
    url: string;
    about: {
      title: string;
      image: string;
      description: string;
    };
    experiences: {
      company_logo: string;
      company_name: string;
      position: string;
      tech_stacks: {
        image: string;
        name: string;
      }[];
      is_present: boolean;
      start_date: string;
      end_date: string;
      key_points: string;
    }[];
    skills: {
      name: string;
      icon: string;
      expertise: number;
    }[];
    works: {
      image: string;
      name: string;
      description: string;
      url: string;
      tech_stacks: {
        image: string;
        name: string;
      }[];
    }[];
  };
};

export default function Home({data}:Props) {

  console.log(data);
  
  
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
     scrollbar-thin scrollbar-thumb-[#F7AB0A]/40 scrollbar-track-transparent scrollbar-thumb-rounded-md scroll-smooth"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nisan's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero hero={data.hero} url={data.url} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About about={data.about} url={data.url} />
      </section>

      {/* Experience */}
      <section id="workExperience" className="snap-center">
        <WorkExperience experiences={data.experiences} url={data.url} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={data.skills} url={data.url} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects works={data.works} url={data.url} />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <footer className="sticky bottom-2 sm:bottom-5 z-20">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <MdHome className="h-8 w-8 cursor-pointer text-gray-500 border p-1 hover:border-[#F7AB0A]/40 hover:bg-[#F7AB0A] hover:text-[rgb(36,36,36)] rounded-full" />
          </Link>
        </div>
      </footer>

      <ReactTooltip />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
    </div>
  );
}
