import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJsSquare, faHtml5, faJava, faGithub, faWindows} from '@fortawesome/free-brands-svg-icons';
import {faDatabase, faCode, faCodeBranch, faLaptopCode, faUserAstronaut, faServer} from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const skillsData = [
    {
      category: "Lenguajes",
      skills: [
        { name: "Python", icon: faPython, color: "blue-500" },
        { name: "JavaScript", icon: faJsSquare, color: "yellow-500" },
        { name: "HTML & CSS", icon: faHtml5, color: "orange-500" },
        { name: "Java", icon: faJava, color: "red-500" },
        { name: "C#", icon: faCode, color: "purple-500" },
        { name: "SQL", icon: faDatabase, color: "green-500" },
      ],
    },
    {
      category: "Tecnologias",
      skills: [
        { name: "React.js", icon: faJsSquare, color: "blue-500" },
        { name: "Next.js", icon: faJsSquare, color: "blue-500" },
        { name: "Django", icon: faPython, color: "green-500" },
        { name: "Django Rest Framework", icon: faPython, color: "green-500" },
        { name: "SQL Server", icon: faServer, color: "red-500" },
        { name: "MySQL", icon: faDatabase, color: "orange-500" },
      ],
    },
    {
      category: "Herramientas",
      skills: [
        { name: "Git", icon: faCodeBranch, color: "red-500" },
        { name: "GitHub", icon: faGithub, color: "purple-500" },
        { name: "VS Code", icon: faLaptopCode, color: "blue-500" },
        { name: "Postman", icon: faUserAstronaut, color: "orange-500" },
        { name: "Microsoft Office", icon: faWindows, color: "green-500" },

      ],
    },
  ];

  const SkillCard = ({ category, skills }) => (
    <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl bg-white p-8 items-center hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">{category}</h3>
      <ul className="mt-6 space-y-6">
        {skills.map((skill, index) => (
          <li
            key={index}
            className={`text-xl text-gray-600 flex items-center justify-center hover:text-${skill.color} transition-colors duration-300`}
          >
            <FontAwesomeIcon icon={skill.icon} className="mr-4 text-2xl" />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="w-full max-w-6xl rounded-lg mx-auto text-center py-12 mb-8">
      <h2 className="text-4xl font-light text-white capitalize">Mis Habilidades</h2>
      <div className=" flex gap-8 mt-10">
        {skillsData.map((data, index) => (
          <SkillCard key={index} category={data.category} skills={data.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;