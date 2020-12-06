import { useState } from 'react';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header>
            <nav className=
                { 
                    "relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg" 
                    + (showMenu ? " shadow-lg bg-pink-500" : " bg-purple-500")
                }
            >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img src="kids.png" className="leading-relaxed inline-block mr-4 py-2 w-1/2" alt="logo"/>

                        <button
                            className= 
                                {
                                    "text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    + (showMenu ? " transition transform-180": "")
                                }
                            type="button"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                { showMenu ? 
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    /> 
                                    : <path fill-rule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    /> 
                                }
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (showMenu ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    Sobre
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                style={{
                minHeight: "55vh"
                }}
            >
                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('https://img.huffingtonpost.com/asset/5cd508e91f000030009c35e3.jpeg?format=webp')"
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                            <h1 className="text-white font-semibold text-5xl">
                            Mantenha a brincadeira viva!
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                            “Play is often talked about as if it were a relief from serious learning. But for children play is serious learning. Play is really the work of childhood.” Fred Rogers
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style={{ height: "70px", transform: "translateZ(0)" }}
                >
                    <svg className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-white fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </div>
        </header>
    );
}

export default Header