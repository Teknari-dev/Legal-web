const Card = ({ title, description, icon, link }) => {
    return (
        <a href={link} className="bg-bg1 p-6 transition w-80 h-72 flex flex-col justify-between hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <div>{icon}</div>
            <div>
                <h3 className="text-xl mb-2 text-primary">{title}</h3>
                <p className="text-secondary">{description}</p>
            </div>
        </a>
    );
};

export default Card;