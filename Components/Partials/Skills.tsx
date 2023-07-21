import React from 'react';

const Skills = () => {

    const skills = [
        {
            name: 'Frontend',
            skills: [
                {name: 'HTML 5', level: '95%', class: 'info'},
                {name: 'CSS 3', level: '90%', class: 'primary'},
                {name: 'SCSS', level: '85%', class: 'warning'},
                {name: 'Bootstrap', level: '95%', class: 'danger'},
                {name: 'JavaScript', level: '90%', class: 'success'},
                {name: 'jQuery', level: '95%', class: 'info'},
                {name: 'React.js', level: '90%', class: 'primary'},
                {name: 'Next.js', level: '90%', class: 'warning'},
                {name: 'Vue.js', level: '85%', class: 'success'},
            ]
        }, {
            name: 'Backend',
            skills: [
                {name: 'Core PHP', level: '95%', class: 'success'},
                {name: 'PHP (OOP)', level: '90%', class: 'info'},
                {name: 'Laravel', level: '90%', class: 'warning'},
            ]
        },
        {
            name: 'Server',
            skills: [
                {name: 'Apache', level: '85%', class: 'success'},
                {name: 'Nginx', level: '80%', class: 'info'},
            ]
        }, {
            name: 'Version Control',
            skills: [
                {name: 'Git', level: '85%', class: 'success'},
            ]
        }, {
            name: 'Operating System',
            skills: [
                {name: 'Windows', level: '90%', class: 'warning'},
                {name: 'Linux', level: '95%', class: 'info'},
                {name: 'Mac', level: '90%', class: 'success'},
            ]
        }, {
            name: 'Database',
            skills: [
                {name: 'SQL', level: '95%', class: 'warning'},
                {name: 'MySql', level: '95%', class: 'info'},
                {name: 'Postgres', level: '85%', class: 'success'},
                {name: 'Oracle', level: '90%', class: 'success'},
            ]
        }
    ]

    return (
        <section className="about-me my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h1 className={'text-center display-1 text-uppercase text-theme'}>About Me</h1>
                    </div>
                    <div className="col-md-6">
                        <p className={'lead text-justify'}>This is Naim an Expert & Experienced Full Stack Web Developer with 5
                            years+ Experience and 150+ projects.</p>
                        <p className={'lead text-justify mt-4'}>I have completed my Graduation in <strong>Computer science and
                            Engineering</strong> and completed Certificate course of <strong>Advanced Web Application
                            development using Laravel Framework</strong>. My goal is always to meet your needs and
                            deadline with 100% satisfaction.</p>
                        <h4 className={'text-theme text-uppercase my-5'}>Reasons to hire me</h4>
                        <ul className={'list-group'}>
                            <li className={'list-group-item'}>Very responsible professional (do not disappear with half-done job or unsatisfied
                                work)
                            </li>
                            <li className={'list-group-item'}>I can spend at least 50 hours/week on your project (can more work on demand)</li>
                            <li className={'list-group-item'}>Always welcome your suggestion and modification.</li>
                            <li className={'list-group-item'}>Hard Worker</li>
                        </ul>
                        <p className={'lead text-justify mt-5'}>I am flexible, hardworking, responsive and always try to provide high
                            quality results for my clients.</p>
                        <p className={'lead text-justify mt-4'}>Feel free to contact with me and you can discuss your project with me I am
                            ready for new challenges. Thank you</p>
                    </div>
                    <div className="col-md-6">
                        <h1 className={'text-uppercase text-theme text-end'}>My Skills</h1>
                        <hr/>
                        {skills.map((technology, index) => (
                            <div className={'skills-div mb-5'} key={index}>
                                <h4 className={'mb-2 text-uppercase text-theme text-end'}>{technology.name}</h4>
                                {technology.skills.map((skill, Sindex)=>(
                                    <div className={'row align-items-center mb-2'} key={Sindex}>
                                        <div className="col-md-3 pe-0 text-end">
                                            <strong className={`text-${skill.class}`}>{skill.name}</strong>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="progress">
                                                <div className={`progress-bar progress-bar-striped  progress-bar-animated bg-${skill.class}`}
                                                     style={{width: skill.level}}>
                                                    {skill.level}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
