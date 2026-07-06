import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>

      <h3 className="text-2xl font-semibold mb-4">My Technical Skills</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <SkillCard 
          title="Frontend" 
          skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]} 
        />
        <SkillCard 
          title="Backend & Tools" 
          skills={["Node.js", "Express", "Git", "GitHub"]} 
        />
      </div>
    </main>
  );
}