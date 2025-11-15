export const Menu = () =>{
    return (
        <div className="fixed top-20 md:top-21 lg:top-23 right-0 h-full w-50 lg:w-1/8 bg-transparent shadow-lg border-l-1 border-gray-900 p-4">
            <h2 className="text-lg font-semibold text-white mb-4">Menu</h2>
            <ul className="space-y-2">
                <li><a href="#start" className="text-gray-400 hover:text-white">Start</a></li>
                <li><a href="#about-me" className="text-gray-400 hover:text-white">About me</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white">Skills</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact me</a></li>
            </ul>
      </div>
    )
}