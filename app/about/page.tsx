import React from 'react';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader';
import Image from 'next/image';
import TeamMember from '../../components/TeamMember';
import logo from "../../public/images/FlareLogo.svg";

const teamMembers = [
  {
    name: "Jackie",
    role: "Frontend Developer",
    bio: "Passionate about creating beautiful user interfaces",
    imageUrl: "/api/placeholder/300/300", // Replace with actual image path
    email: "",
    github: "",
    linkedin: ""
  },
  {
    name: "Ben",
    role: "Backend Engineer",
    bio: "Database and API specialist",
    imageUrl: "/api/placeholder/300/300", // Replace with actual image path
    email: "",
    github: "",
    linkedin: ""
  },
  {
    name: "Henver",
    role: "Full Stack Developer",
    bio: "Building seamless experiences from front to back",
    imageUrl: "/api/placeholder/300/300", // Replace with actual image path
    github: "",
    linkedin: ""
  },
  {
    name: "Sebastian",
    role: "Frontend Developer",
    bio: "Passionate about creating beautiful user interfaces",
    imageUrl: "/api/placeholder/300/300", // Replace with actual image path
    email: "",
    github: "",
    linkedin: ""
  },
  {
    name: "Allison",
    role: "Backend Engineer",
    bio: "Database and API specialist",
    imageUrl: "/api/placeholder/300/300",
    email: "",
    github: "",
    linkedin: ""
  },
  {
    name: "Kevin",
    role: "Full Stack Developer",
    bio: "Building seamless experiences from front to back",
    imageUrl: "/api/placeholder/300/300",
    github: "",
    linkedin: ""
  },
  {
    name: "Jin",
    role: "Full Stack Developer",
    bio: "Building seamless experiences from front to back",
    imageUrl: "/api/placeholder/300/300",
    github: "",
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