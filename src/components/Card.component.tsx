import brincadeiras from '../services/brincadeiras.data.json';

function Card() {
    return (
        <>
            {brincadeiras.
                map((brincadeira: any) => 
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={brincadeira.imagem} alt={brincadeira.idade} />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{brincadeira.idade}</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{brincadeira.title}</h1>
                                <p className="leading-relaxed mb-3">{brincadeira.chamada}</p>
                                <div className="flex items-center flex-wrap ">
                                <a href={brincadeira.link} target="_blank" className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">Leia mais
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Card