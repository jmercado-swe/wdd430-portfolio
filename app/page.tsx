import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "MoveAbroad",
    description:
      "A country lookup website that shows information about countries to help people plan a move abroad. Users can save favorite countries.",
    technologies: ["JavaScript", "Vite", "World Bank API", "Frankfurter API", "localStorage"],
    link: "https://github.com/jmercado-swe/moveabroad",
  },
  {
    title: "Sleep Outside",
    description:
      "An online camping gear store built as a team project. It has product listings, product details, sorting, and a shopping cart.",
    technologies: ["JavaScript", "Vite", "HTML", "CSS", "REST API"],
    link: "https://github.com/jmercado-swe/wdd330-sleepoutside",
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am a software development student learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
