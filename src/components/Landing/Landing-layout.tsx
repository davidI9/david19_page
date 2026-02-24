import styles from "./Landing.module.css"

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
                        <div className={`${styles.optText} rotate-357`}>SKILLS</div>
                        <div className={`${styles.optText} rotate-1 ml-5 mt-3`}>PROYECTS</div>
                        <div className={`${styles.optText} rotate-3 ml-7 mt-3`}>PROFILE</div>
                        <div className={`${styles.optText} rotate-5 mt-2`}>CONTACT</div>
                    </div>
                </div>
            </div>
        </div>
    )
}