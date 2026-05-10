import { useState } from "react";
import styles from "./Xp.module.css";
import { Link } from "react-router-dom";

const BackendComponent = () => {
    return(
        <div className="grid items-center gap-20 mt-10">
            <div className={`h-30 ${styles.section1} flex justify-center items-center`}>
                <div>
                    <img src="/images/fastapi.png" alt="fastapilogo" className={`w-15 ml-10`}/>
                </div>
                <div className={`${styles.section2}`}>FAST API</div>
            </div>
            <div className={`h-30 ${styles.section1} flex justify-center items-center`}>
                <div>
                    <img src="/images/Python-Emblem.png" alt="fastapilogo" className={`w-15 ml-10`}/>
                </div>
                <div className={`${styles.section2}`}>PYTHON</div>
            </div>
            <div className={`h-30 ${styles.section1} flex justify-center items-center`}>
                <div>
                    <img src="/images/fastapi.png" alt="fastapilogo" className={`w-15 ml-10`}/>
                </div>
                <div className={`${styles.section2}`}>FAST API</div>
            </div>
        </div>
    )
}
const DevopsComponent = () => <div>Contenido chulo de DevOps con terminales falsas</div>;
const FrontendComponent = () => <div className="grid h-full">
                                    <div className="flex w-[90%] justify-center items-center h-full">
                                        <p>El Frontend no es mi area favorita de programación pero aun así la considero bastante interesante.
                                        He desarrollado Frontend de diferentes formas a lo largo de mi aprendizaje, ahora mismo puedo asegurar que
                                        domino CSS y HTML. 
                                        </p>
                                        <p>Sin embargo a día de hoy lo que realmente crea páginas efectivas y visuales son las librerias
                                        y frameworks como React.js, TailwindCSS, Vue, Angular, etc. Yo, en mi pequeña experiencia en el Frontend, he logrado
                                        utilizar React.js y TailwindCSS a través de Vite.
                                        </p>
                                        <p>Le recomiendo investigar mi sección de projectos entre los que se encuentran esta web y varias más en las que he participado.</p>
                                    </div>
                                </div>;
const AIComponent = () => <div>Contenido de AI</div>;

export const XP = () => {
    // 1. Objeto con la información (tu base de datos en miniatura)
    const vistaSkills = {
        BACKEND: <BackendComponent />,
        DEVOPS: <DevopsComponent />,
        FRONTEND: <FrontendComponent />,
        AI: <AIComponent />
    };

    // 2. Estado para saber qué elemento tiene el ratón encima (empieza en null para estar vacío)
    const [skillActiva, setSkillActiva] = useState<string | null>(null);

    return(
        <div className={`${styles.back}`}>
            
            <div className="">
                <div>
                    <Link to="/" className={`${styles.backButton} fixed top-0 left-0 z-50`}>
                      <span className={styles.backText}>BACK</span>
                    </Link>
                </div>
                
                {/* 3. Le inyectamos el onMouseEnter a cada palabra */}
                <div className={`${styles.optText} rotate-5 ml-150 mt-5`} onMouseEnter={() => setSkillActiva("BACKEND")}>
                    BACKEND
                </div>

                <div className={`${styles.optText} rotate-11 ml-140 mt-15`} onMouseEnter={() => setSkillActiva("FRONTEND")}>
                    FRONTEND
                </div>
                
                <div className={`${styles.optText} rotate-19 ml-125 mt-18`} onMouseEnter={() => setSkillActiva("DEVOPS")}>
                    DEVOPS
                </div>
                
                <div className={`${styles.optText} rotate-25 ml-90 mt-19`} onMouseEnter={() => setSkillActiva("SOFTSKILLS")}>
                    AI-DEV
                </div>
            </div>

            <div className="">
                {skillActiva && (
                    <div className={`${styles.textBorder}`}>
                        {vistaSkills[skillActiva as keyof typeof vistaSkills]}    
                    </div>
                )}
            </div>

        </div>
    )
}