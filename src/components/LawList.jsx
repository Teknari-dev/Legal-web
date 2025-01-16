import Card from './Card';

const LawList = () => {
    const laws1 = [
        {
            title: 'Derechos humanos e igualdad',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 7H4l8-7z" />
                    <path d="M19 10H5v7a2 2 0 002 2h10a2 2 0 002-2v-7z" />
                </svg>
            ),
        },
        {
            title: 'Derechos humanos de libertades',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 17V9H5l7-7 7 7h-4v8z" />
                    <path d="M5 19h14v2H5z" />
                </svg>
            ),
        },
        {
            title: 'Derechos humanos de procesales',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 9v6l-2-2M17 9v6l2-2M10 5h4M10 19h4" />
                </svg>
            ),
        },
    ];

    const laws2 = [
        {
            title: 'Derechos humanos sociales',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12l9-9 9 9-9 9-9-9z" />
                    <path d="M2 12l9-9" />
                </svg>
            ),
        },
        {
            title: 'Derechos humanos colectivos',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4.354l9.646 5.646L12 15.646 2.354 10 12 4.354z" />
                </svg>
            ),
        },
    ]

    return (
        <section className="min-h-screen max-h-screen py-16 bg-bg2">
            <div className="container mx-auto text-center pt-10">
                <h2 className="text-4xl font-bold mb-12 text-primary">Lista de leyes</h2>
                {/* Primera Fila */}
                <div className="flex justify-center flex-wrap gap-20 p-10">
                    {laws1.map((law, index) => (
                        <Card key={index} title={law.title} description={law.description} icon={law.icon} />
                    ))}
                </div>
                <div className="flex justify-center flex-wrap gap-20 pb-10">
                    {laws2.map((law, index) => (
                        <Card key={index} title={law.title} description={law.description} icon={law.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LawList;
