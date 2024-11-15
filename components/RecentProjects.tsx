"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { cn } from "@/lib/utils";
import Image from "next/image";

const RecentProjects = () => {
  return (
    
    <div className="py-20">
      <h1 className="heading">
        A small selection of{' '}
        <span className="text-green-500">recent projects</span>
      </h1>
      {/* {projects.map((item) => (
        <div className="max-w-xs w-full group/card">
          <div
            className={cn(
              " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src={item.img}
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Manu Arora
                </p>
                <p className="text-sm text-gray-400">2 min read</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Author Card
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                Card with Author avatar, complete name and time to read - most
                suitable for blogs.
              </p>
            </div>
          </div>
        </div>
      ))} */}
      

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 mt-20 mb-10">
        {projects.map((item) => (
          <a
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            href={item.link}
            target="_blank"
          >
            <PinContainer title={item.pin} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl text-green-800"
                  style={{ backgroundColor: '#000319' }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-green-500">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#86efac" />
                </div>
              </div>
            </PinContainer>
          </a>
        ))}
      </div>

      <h3 className="relative z-10 mt-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        Another projects will be added shortly. Stay tuned for more information.
      </h3>
    </div>
  );
};

export default RecentProjects;
