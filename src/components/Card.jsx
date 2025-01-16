const Card = ({ title, description, icon }) => {
    return (
        <div className="bg-bg1 p-6 transition w-80 h-72 flex flex-col justify-between">
            <div>{icon}</div>
            <div>
                <h3 className="text-xl mb-2 text-primary">{title}</h3>
                <p className="text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default Card;
