import React from "react";

import { workExperience } from "@/data";
import { companies, testimonials } from '@/data';
import { Button } from './ui/MovingBorders';

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading mb-20">
        My <span className="text-green-500">work experience</span>
      </h1>

      <div className="max-w-5xl mx-auto px-8 mt-10 relative">
        <div className="max-w-x3l mx-auto divide-zinc-800 relative">
          <div className="absolute h-full w-[4px] bg-gradient-to-t from-transparent via-green-500 to:transparent  -left-4 md:-left-10">
            <span className="absolute z-20 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] before:bg-gradient-to-l before:from-transparent before:via-green-500 before:to-blue-500 style_meteor__iBwXl left-1"></span>
          </div>
          <div className="w-full mt-20 grid grid-cols-1 gap-10 ps-10">
            {workExperience.map((card) => (
              <Button
                key={card.id}
                //   random duration will be fun , I think , may be not
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  //   add these two
                  //   you can generate the color from here https://cssgradient.io/
                  background: 'rgb(4,7,29)',
                  backgroundColor:
                    'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                  // add this border radius to make it more rounded so that the moving border is more realistic
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                // remove bg-white dark:bg-slate-900
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="lg:w-32 md:w-20 w-16"
                  />
                  <div className="lg:ms-5">
                    <p className="text-start text-white-100 mb-3 font-semibold">
                      {card.year}
                    </p>
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <p className="text-start text-white-100 mt-1 font-semibold">
                      {card.company}
                    </p>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-20">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2">
              <img
                src={company.img}
                alt={company.name}
                className="md:w-40 w-20"
              />
              {/* <img
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
              /> */}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;
