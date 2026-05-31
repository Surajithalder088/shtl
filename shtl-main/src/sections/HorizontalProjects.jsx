import React, { useEffect, useRef } from "react";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project One",
    desc: "Modern UI/UX design project.",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Project Two",
    desc: "Animated React website.",
    video:
      "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "Project Three",
    desc: "Next.js dashboard interface.",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Project Four",
    desc: "GSAP portfolio animations.",
    video:
      "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "Project Five",
    desc: "Creative frontend experience.",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const HorizontalProjects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    // total horizontal movement
    const totalScroll =
      track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,

        // section starts animation
        start: "top top",

        // section remains pinned
        pin: true,

        // smooth scrubbing
        scrub: 1,

        // how long scroll continues
        end: () => `+=${totalScroll}`,

        // debugging
        markers: false,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="horizontal-section" ref={sectionRef}>
      <div className="horizontal-track" ref={trackRef}>

        {/* Intro Card */}
        <div className="panel intro-panel">
          <h1>Our Projects</h1>

          <p>
            Explore our creative work, frontend
            interactions, animations, and modern
            UI experiences.
          </p>
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <div className="panel project-card" key={index}>
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
            />

            <h2>{project.title}</h2>

            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalProjects;