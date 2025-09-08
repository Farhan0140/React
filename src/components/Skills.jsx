import { useState } from "react";

const Skills = () => {

  const [skills, setSkills] = useState(["C", "C++", "Python", "Java", "Php"]);

  const HandleAddSkill = () => {
    setSkills([...skills, "React"]);
  }

  const HandleRemoveSkill = () => {
    setSkills(skills.filter((skill) => skill != "React"));
  }

  const HandleUpdateSkill = () => {
    setSkills(skills.map((skill) => skill == "Java" ? skill = "JavaScript" : skill));
  }

  return (
    <div>
      <ul className="px-15 py-5 text-3xl list-disc">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <div className="p-5 py-10 flex gap-5">
        <button
          className="btn_shadow p-4 rounded-xl"
          onClick={HandleAddSkill}
        >
          Add Skill
        </button>

        <button
          className="btn_shadow p-4 rounded-xl"
          onClick={HandleUpdateSkill}
        >
          Update Skill
        </button>

        <button
          className="btn_shadow p-4 rounded-xl"
          onClick={HandleRemoveSkill}
        >
          Remove Skill
        </button>
      </div>
    </div>
  );
};

export default Skills;