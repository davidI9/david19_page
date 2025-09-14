import { useState } from "react"
import { Menu } from "../Menu/Menu"

export const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="fixed top-0 border-b-1 border-gray-900 w-full bg-gradient-to-b from-black to-transparent">
            <div className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2">
                <h1 className="text-white font-mono tracking-widest text-s md:text-lg lg:text-3xl justify-self-center p-7 md:pl-33">&lt;David19_/&gt;</h1>
                <div className="hidden md:block"></div>
                <div className="ml-20 lg:max-w-15 lg:max-h-15 max-w-10 md:max-h-10 justify-self-center md:mr-10 self-center">
                    <button onClick={() => setOpen(!open)}>
                        <img src="https://i0.wp.com/benjaminmarcello.nl/wp-content/uploads/2021/12/menu-icon-PNG-1.png?fit=500%2C500&ssl=1" alt="menuicon"/>
                        {open ? "" : ""}
                    </button>
                    {open && <Menu/>}
                </div>
            </div>
        </div>
    )
}