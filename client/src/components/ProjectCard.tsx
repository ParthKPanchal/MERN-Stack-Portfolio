import { FiExternalLink, FiGithub } from "react-icons/fi";

type Props = {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github?: string;
  image: string;
};

const ProjectCard = ({
  title,
  description,
  tech,
  live,
  github,
  image,
}: Props) => {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:-translate-y-2 hover:border-red-500/30 transition-all duration-300">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} Project by Parth Panchal`}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-red-500 group-hover:text-red-400 transition">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-4 text-sm leading-relaxed min-h-[90px]">
          {description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-5">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs border border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-3 mt-6">
          {/* LIVE PREVIEW */}
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl text-sm font-medium"
          >
            <FiExternalLink />
            Live Preview
          </a>

          {/* GITHUB */}
          {github && github.trim() !== "" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 transition px-5 py-3 rounded-xl text-sm font-medium"
            >
              <FiGithub />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;