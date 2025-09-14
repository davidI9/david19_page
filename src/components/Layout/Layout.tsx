import styles from "./Layout.module.css"
import { Header } from "../Header/Header"
import { Card } from "../Card/Card"

export const Layout = () => {
    return (
        <div id="start" className="bg-black">
            <div className={styles.centered}>
                <Header/>
                <Card/>
            </div>
        </div>
    )
}