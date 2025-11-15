import styles from "./Card.module.css"


export const Card = () => {
    return (
        <div className="outline-1 outline-stone-900 w-4/4 md:w-3/4 lg:w-3/4 shadow-2xl pt-35">

            <div>
                <div className={styles.centered2}>
                    <div className="max-w-74 mb-5">
                        <img src="/images/yo.jpeg" alt="/images/sans.png" className=" outline-1 outline-stone-900 border-b-1 border-gray-400 shadow-lg shadow-gray-800 opacity-100"></img>
                    </div>
                    <div className="grid-rows-2 max-w-120 max-h-78 md:ml-4 lg:justify-self-start justify-self-center">
                        <p className="text-white text-xs md:text-s lg:text-xl pl-5 pr-2 pt-1 pb-3 mb-5 font-mono tracking-widest outline-1 outline-stone-900 shadow-lg shadow-gray-900 ">&lt;HI THERE WORLD/&gt;</p>
                        <p className="text-gray-100 text-xs md:text-s lg:text-xl pl-5 pt-3 pb-3 font-extralight outline-1 outline-stone-900 shadow-lg shadow-gray-900 border-b-1 border-gray-400">/ backend dev with good taste in front<br/><br/>/ currently studying Software Engineering in Universidad de Córdoba (Spain)<br/><br/>/ love music and vgames<br/><br/>/ colours enjoyer</p>
                    </div>
                </div>
            </div>

            <div id="about-me" className={styles.centered3}>
                <div className="mt-30 max-w-7/8 shadow-lg shadow-gray-900 justify-self-center ">
                    <p className="text-white font-mono tracking-widest text-xs md:text-s lg:text-xl justify-self-start pb-2 border-b-2 mb-5 border-gray-200">&lt;ABOUT ME/&gt;</p>
                    <p className="text-gray-200 text-xs md:text-s lg:text-xl outline-1 outline-stone-900 justify-self-start p-2">
                        Hi there, my name is David...
                        <br/><br/>
                        Started building back in 2023 with a few python docs, loved it but didn't really put much effort. Later in 2024, I started to take it seriously and here I am now!
                        <br/><br/>
                        Since 2024, I am a Software Engineering student in Universidad de Córdoba. Here, I ve participated in lots of activities related to my knowledge area, most of them
                        impulsed by the UCO's students organization called <a href="https://www.uco.es/aulasoftwarelibre/" target="blank" className="text-[#a5945a] hover:text-[#cac0b5]">Aula de Software Libre</a> (Free Software Classroom).
                        <br/><br/>
                        I've participated so much that they gave me a spot in the team of coordination, in order to help with the organization of the activities.
                        I suggest you to check out some of the ASL's iniciatives such as the <a href="https://salmorejo.tech/2025/" target="blank" className="text-[#a5945a] hover:text-[#cac0b5]">SalmorejoTech</a> event!
                        <br/><br/>
                        For now I am keen on keeping up with the pace of the career while I develop my skills on software development.
                        <br/><br/>
                    </p>
                </div>
            </div>

            <div id="skills" className={styles.centered3}>
                <div className="mt-30 max-w-7/8 shadow-lg shadow-gray-900 justify-self-center ">
                    <p className="text-white font-mono tracking-widest text-xs md:text-s lg:text-xl justify-self-start pb-2 border-b-2 mb-5 border-gray-200">&lt;SKILLS/&gt;</p>
                    <p className="text-gray-200 text-xs md:text-s lg:text-xl outline-1 outline-stone-900 justify-self-start p-2">
                        Among some of my skills, I am used to work with <text className="text-[#a5945a] text-xs md:text-s lg:text-xl">Python, C, C++, Javascript/Typescript</text> and the <text className="text-[#a5945a] text-xs md:text-s lg:text-xl">CSS+HTML</text> webpack, also I ve tasted  <text className="text-[#a5945a] text-xs md:text-s lg:text-xl">React, Tailwindcss, Django</text> and some other frameworks.
                        <br/><br/>
                        I am also experienced in <text className="text-[#a5945a] text-xs md:text-s lg:text-xl">clean architecture principles and DDD design</text>, I have some projects which implements all the previous mentioned knowledge in my github. 
                        <br/><br/>
                        But I must say that my most powerfull traits are my <text className="text-[#a5945a] text-xs md:text-s lg:text-xl">proactivity and leadership</text>, I am always thinking on things to do in order to succed in what I want to achieve,
                        always trying to take a logical perspective.
                        <br/><br/>
                        I am leaving you my social media and github below, where you'll be able to find some of the things I've been doing, there are so many things coming in the future... Hope you like my work and feel free to contact me for anything!
                    </p>
                </div>
            </div>

            <div className={styles.centered3}>
                <div className="mt-30 max-w-16/17 justify-self-center">
                    <p className="text-white font-mono tracking-widest text-xs md:text-s lg:text-xl justify-self-start p-2 pb-[5%] border-b-1 border-gray-200">&lt;HUELLA DIGITAL/&gt;</p>
                    <div id="contact" className={styles.centered4}>
                        <div className="w-[80%] max-w-10 in-hover:shadow-2xl hover:shadow-white">
                            <a href="https://www.instagram.com/davd.sanchz/" target="blank">
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt="ig"/>
                            </a>
                        </div>
                        <div className="w-[80%] max-w-10 in-hover:shadow-2xl hover:shadow-white">
                            <a href="https://github.com/davidI9" target="blank">
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt="ig"/>
                            </a>
                        </div>
                        <div className="w-[80%] max-w-10 in-hover:shadow-2xl hover:shadow-white">
                            <a href="https://x.com/davd19_" target="blank">
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png" alt="x" />
                            </a>
                        </div>
                        <div className="w-[80%] max-w-10 in-hover:shadow-2xl hover:shadow-white">
                            <a href="https://www.linkedin.com/in/david-s%C3%A1nchez-palomino-a06671322/" target="blank">
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" alt="x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}