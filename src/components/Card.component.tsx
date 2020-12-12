function Card() {
    return (
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">brincadeira.idade</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">brincadeira.titulo</h1>
                        <p className="leading-relaxed mb-3">brincadeira.chamada</p>
                        <div className="flex items-center flex-wrap ">
                        <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">Leia mais
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Card