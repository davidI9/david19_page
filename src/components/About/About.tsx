import styles from './About.module.css';

export const About = () => {
    return (
        <div className={styles.back}>
            <div className='max-w-120'>
                <img src="/images/yo2.png" alt="david" className='opacity-50 hover:opacity-100 transition-opacity duration-800 max-w-100'/>
                <div className='w-full h-20 opacity-30 bg-linear-to-r from-black to-transparent'></div>
            </div>
        </div>
    )
}