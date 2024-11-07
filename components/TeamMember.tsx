import React from 'react';
import Image from 'next/image';
import { Mail, Github, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name?: string;
  role?: string;
  bio?: string;
  imageUrl?: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name = "Joe Shmoe",
  role = "Software Engineer",
  bio = "Passionate about building great user experiences",
  imageUrl = "/api/placeholder/300/300",
  email = "",
  github = "",
  linkedin = ""
}) => {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={`${name}'s profile picture`}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-100">{name}</h3>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
          
          <p className="text-gray-300 text-sm">{bio}</p>
          
          <div className="flex space-x-4 pt-4">
            {email && (
              <a 
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-gray-100 transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail size={20} />
              </a>
            )}
            {github && (
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition-colors"
                aria-label={`${name}'s GitHub`}
              >
                <Github size={20} />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
