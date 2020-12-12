export default function Footer() {
    return (
        <>
            <footer className="relative bg-gray-300 pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: "80px", transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="w-full">
                        <div className="px-6">
                            <a href="https://github.com/amandarsl">
                                <img
                                    alt="..."
                                    src="https://avatars1.githubusercontent.com/u/68851509?s=460&u=135df01d531b66edf09578f8edf8512c9519f58d&v=4"
                                    className="shadow-lg rounded-full max-w-full mx-auto"
                                    style={{ maxWidth: "120px" }}
                                />
                            </a>
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">
                                    <a href="https://github.com/amandarsl">Amanda Rebeca</a>
                                </h5>
                                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                    Desenvolvedora Front-end Jr.
                    </p>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-400" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-gray-600 py-1">
                                    Projeto final do curso na <strong>reprograma</strong> -
                <a
                                        href="https://linkedin.com/in/amandarsl"
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        Amanda Rebeca
                </a>.
              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}