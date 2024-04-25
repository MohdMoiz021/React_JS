function Skills() {
    const skills=['JavaScript','Python','Rust','React','C#'];
    return (  <ul>
        {skills.map(skill=><li>{skill}</li>)}
        </ul>
    
    );
}

export default Skills;