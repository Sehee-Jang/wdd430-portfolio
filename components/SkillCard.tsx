interface SkillCardProps {
  title: string;
  skills: string[];
  bgColor?: string;
}

export default function SkillCard({title, skills, bgColor = 'bg-gray-200'}: SkillCardProps) {
  return (
    <div className={`p-6 ${bgColor} border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
      <h3 className="text-xl font-bold text-blue-600 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}