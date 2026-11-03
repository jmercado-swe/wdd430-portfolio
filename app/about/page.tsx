import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-8">
        I am studying software development through BYU Pathway. My goal is to become a full-stack developer.
      </p>
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <SkillCard category="Frontend" skills={["HTML", "CSS", "JavaScript", "React"]} />
        <SkillCard category="Backend" skills={["Node.js", "Express", "MongoDB", "PostgreSQL"]} />
      </div>
    </main>
  );
}
