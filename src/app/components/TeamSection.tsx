'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "/assets/images/team2-img1.webp",
      social: {
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        youtube: "https://youtube.com/@johndoe",
        instagram: "https://instagram.com/johndoe"
      }
    },
    {
      name: "Jane Smith",
      position: "Chief Technology Officer",
      image: "/assets/images/team2-img2.webp",
      social: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        youtube: "https://youtube.com/@janesmith",
        instagram: "https://instagram.com/janesmith"
      }
    },
    {
      name: "Sarah Thompson",
      position: "Head of Project Management",
      image: "/assets/images/team2-img3.webp",
      social: {
        linkedin: "https://linkedin.com/in/sarahthompson",
        twitter: "https://twitter.com/sarahthompson",
        youtube: "https://youtube.com/@sarahthompson",
        instagram: "https://instagram.com/sarahthompson"
      }
    },
    {
      name: "David Garcia",
      position: "Lead Software Engineer",
      image: "/assets/images/team2-img4.webp",
      social: {
        linkedin: "https://linkedin.com/in/davidgarcia",
        twitter: "https://twitter.com/davidgarcia",
        youtube: "https://youtube.com/@davidgarcia",
        instagram: "https://instagram.com/davidgarcia"
      }
    }
  ];

  const SocialIcon = ({ type, url }: { type: string; url: string }) => {
    const icons = {
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      youtube: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.929.01 7.694.048 7.46.085 7.297.146 7.159.22c-.145.078-.27.172-.402.286-.408.358-.766.731-.766 1.262v.001c0 .19.014.333.042.465.028.132.07.24.126.346.112.212.266.404.43.572.328.336.736.617 1.15.77.208.077.417.118.627.118.31 0 .618-.062.895-.166.277-.104.53-.25.742-.43.424-.36.719-.864.719-1.44 0-.576-.295-1.08-.719-1.44-.212-.18-.465-.326-.742-.43C12.635.062 12.327 0 12.017 0zm0 1.441c.204 0 .407.033.604.098.49.162.932.435 1.275.787.172.176.308.364.406.563.049.1.085.198.11.295.025.097.038.188.038.275 0 .087-.013.178-.038.275-.025.097-.061.195-.11.295-.098.199-.234.387-.406.563-.343.352-.785.625-1.275.787-.197.065-.4.098-.604.098-.204 0-.407-.033-.604-.098-.49-.162-.932-.435-1.275-.787-.172-.176-.308-.364-.406-.563-.049-.1-.085-.198-.11-.295-.025-.097-.038-.188-.038-.275 0-.087.013-.178.038-.275.025-.097.061-.195.11-.295.098-.199.234-.387.406-.563.343-.352.785-.625 1.275-.787.197-.065.4-.098.604-.098z"/>
        </svg>
      )
    };
    
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[color:rgba(0,0,0,0.1)] backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--foreground)] hover:bg-[color:rgba(0,0,0,0.2)] hover:scale-110 transition-all duration-300"
      >
        {icons[type as keyof typeof icons]}
      </a>
    );
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--foreground)] text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Meet With Our Expert Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[var(--foreground)] transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setSelectedMember(index)}
              onMouseLeave={() => setSelectedMember(null)}
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Social Media Icons */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 transition-all duration-500 ${
                  selectedMember === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <SocialIcon type="linkedin" url={member.social.linkedin} />
                  <SocialIcon type="twitter" url={member.social.twitter} />
                  <SocialIcon type="youtube" url={member.social.youtube} />
                  <SocialIcon type="instagram" url={member.social.instagram} />
                </div>
              </div>

              {/* Member Info (with margin gap) */}
              <div className="p-6 mt-4 text-center">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-1 group-hover:opacity-80 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[var(--foreground)] text-sm opacity-70">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
