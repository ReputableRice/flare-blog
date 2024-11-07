import React from 'react';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader';
import Image from 'next/image';
import TeamMember from '../../components/TeamMember';
import logo from '../../public/images/FlareLogo.svg';
import tmK from "../../public/images/tmK.jpg";
import tmS from "../../public/images/tmS.jpg";
import tmB from "../../public/images/tmB.jpg";
import tmJ from "../../public/images/tmJ.png";
import tmH from "../../public/images/tmH.jpg";
import tmStock from "../../public/images/tmStock.jpg";
// import tmS from "../../public/images/tmS.jpg";

const teamMembers = [
  {
    name: "Jackie",
    role: "Frontend Developer",
    bio: "Passionate about creating beautiful user interfaces",
    imageUrl: tmJ, // Replace with actual image path
    github: "https://github.com/ReputableRice",
    linkedin: ""
  },
  {
    name: "Ben",
    role: "Frontend Developer",
    bio: "Creating accessible, trustworthy apps with UX UI principles. ",
    imageUrl: tmB, // Replace with actual image path
    github: "https://github.com/Sucralosee",
    linkedin: "https://www.linkedin.com/in/ben-louis-001116308/"
  },
  {
    name: "Henver",
    role: "Frontend Developer",
    bio: "Passionate about creating beautiful user interfaces",
    imageUrl: tmH, // Replace with actual image path
    github: "https://github.com/Hennyyyy8",
    linkedin: "https://www.linkedin.com/in/henver-bio-87905129b/"
  },
  {
    name: "Sebastian",
    role: "Frontend Developer",
    bio: "Passionate about creating beautiful user interfaces",
    imageUrl: tmS, // Replace with actual image path
    github: "https://github.com/BwesewB",
    linkedin: "https://www.linkedin.com/in/sebastianfok/"
  },
  {
    name: "Allison",
    role: "Full Stack Web Developer",
    bio: "Full Stack Web Developer",
    imageUrl: tmStock,
    github: "https://github.com/allison-dahan",
    linkedin: ""
  },
  {
    name: "Kevin",
    role: "Full Stack Web Developer",
    bio: "Delivering key features with a focus on interactive and seamless user experiences.",
    imageUrl: tmK,
    github: "https://github.com/BCITKevin",
    linkedin: "https://www.linkedin.com/in/kevin-hyun-ho-so-b190b8297/"
  },
  {
    name: "Jin",
    role: "Full Stack Web Developer",
    bio: "Full Stack Web Developer",
    imageUrl: tmStock,
    github: "https://github.com/Jin-fswd",
    linkedin: ""
  },
];

export default async function About(): Promise<JSX.Element> {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className='mx-auto mt-4 w-full max-w-6xl flex-col space-y-16 px-4 lg:px-0'>
          <h1 className="text-gray-100 bg-clip-text text-4xl font-sans font-bold mt-9">
            About
          </h1>
          
          <div className='mt-1'>
            <p className='mb-8'>Get to know the team at</p>
            
            <div className="flex justify-center mb-12">
              <Image
                height={300}
                width={300}
                src={logo}
                alt="Flare logo"
                className="w-auto h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  {...member}
                />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export const revalidate = 60;