import { notFound } from "next/navigation";

// Dummy project data (same as Projects.jsx for now)
const projects = {
  phishingshield: {
    title: "PhishingShield Extension",
    description: "AI + Blockchain powered Chrome extension to detect phishing sites in real time.",
    stack: ["Next.js", "Node.js", "MongoDB", "Solidity"],
  },
  nftickets: {
    title: "NFTickets Platform",
    description: "Decentralized NFT-based event ticketing platform with resale & transfers.",
    stack: ["Next.js", "Solidity", "React"],
  },
  "cryptransfer": {
    title: "CrypTransfer",
    description: "Decentralized cryptocurrency transfer platform with real-time tracking.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
  },
  niveshwise: {
    title: "NiveshWise",
    description: "Investment guidance platform built with Next.js and Tailwind.",
    stack: ["Next.js", "Tailwind"],
  },
};

export default function ProjectPage({ params }) {
  const project = projects[params.slug];
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{project.description}</p>

      <h2 className="mt-8 text-2xl font-semibold text-gray-900">Tech Stack</h2>
      <ul className="mt-2 list-disc list-inside text-gray-700">
        {project.stack.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
