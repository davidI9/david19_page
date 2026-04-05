import styles from "./Landing.module.css"
import { Link } from 'react-router-dom';

export const LandingLayout = () => {
    return (
        <div className={`${styles.firstlayer} w-full h-screen aspect-square`}>
            <div className={`rotate-90 fixed ${styles.text} top-60 left-[-20vw]`}>
                <p className="text-gray-600">19</p><p>DAVID</p>
            </div>

            <div className={`${styles.secondlayer} w-full h-screen aspect-square`}>
                <div className={`${styles.thirdlayer} w-full h-screen`}>
                    <div>.</div>
                    <div>
                        <Link to={"/skills"} className={`${styles.optText} rotate-357`}>SKI<p className="hover:text-red-700">L</p>LS</Link>
                        <Link to={"/profile"} className={`${styles.optText} rotate-1 ml-5 mt-3`}>PROF<p className="hover:text-red-700">I</p>LE</Link>
                        <Link to={"/projects"} className={`${styles.optText} rotate-3 ml-7 mt-3`}>PROJ<p className="hover:text-red-700">E</p>CT<p className="hover:text-red-700">S</p></Link>
                        <Link to={"/contact"} className={`${styles.optText} rotate-5 mt-2`}>CONTACT</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



/**********************************************************************************************
 LAS DIMENSIONES MINIMAS PARA QUE SE VEA BIEN SON 1200 DE ANCHO X 700 DE ALTO

 HAY QUE CONFIGURAR PARA QUE SEA OTRO TIPO DE LAYOUT A PARTIR DE AHÍ, QUE SEA RESPONSIVE Y TAL
**********************************************************************************************/