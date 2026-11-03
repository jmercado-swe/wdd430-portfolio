interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded shadow-sm">
      <h3 className="text-lg font-bold mb-2 text-blue-700">{category}</h3>
      <ul className="list-disc list-inside text-gray-700">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
