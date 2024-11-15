import { FaDownload, FaLocationArrow } from 'react-icons/fa6';

import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FlipWords } from './ui/FlipWords';
import { HoverBorderGradient } from './ui/HoverBorderGradient';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="green"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="green" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
            Tech Savvy. Design Driven. Business Minded.
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}

          <div className="font-bold text-center text-[40px] md:text-6xl lg:text-6xl my-4 tracking-wide">
            Transforming{' '}
            <FlipWords
              words={[
                'WebApp,',
                'Design,',
                'Business,',
                'Technology,',
                'Network,',
              ]}
              className="text-green-500"
            />{' '}
            <br />
            Unlimited Creativity.
          </div>

          {/* <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          /> */}

          <p className="my-8 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Jericho, a Creative Developer based in Surabaya.
          </p>

          {/* <a
            className="m-40 flex justify-center text-center"
            href="https://drive.google.com/file/d/1s3Ox4AdaU4LU2q5YTapy6rDMI0xm4Mcu/view?usp=sharing"
            target="_blank"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black-100 bg-white text-black-100 dark:text-white flex items-center space-x-2 px-5"
            >
              <FaDownload />
              <span>Download CV</span>
            </HoverBorderGradient>
          </a> */}
          {/* <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
