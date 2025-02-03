import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const ModalIntegrantes = ({ isOpen, onClose }) => {
    const { translate } = useContext(LanguageContext);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 mx-4">
                <h2 className="text-lg font-bold text-center mb-4 text-primary">
                    {translate("footer.team")}
                </h2>
                <ul className="text-center text-primary">
                    <li>Jesús Alayón Domínguez</li>
                    <li>Gustavo Montejo Santo</li>
                    <li>José Manuel Morales Guerrero</li>
                    <br />
                </ul>
                <h2 className="text-lg font-bold text-center mb-4 text-primary">{translate("footer.team2")}</h2>
                <ul className="text-center text-primary">
                    <li>Arturo Corona Ferreira</li>
                    <li>Carlos Arturo Custodio izquierdo</li>
                    <li>Jose Luis Gómez Ramos</li>
                    <li>Carlos González Zacarías</li>
                </ul>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        {translate("footer.close")}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { translate } = useContext(LanguageContext);

    return (
        <footer className="w-full bg-primary text-white py-6 flex justify-center">
            <button
                onClick={() => setModalOpen(true)}
                className="bg-bg1 px-6 py-2 rounded-lg text-primary font-semibold hover:bg-gray-400 transition"
            >
                {translate("footer.team")}
            </button>
            <ModalIntegrantes isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </footer>
    );
};

export default Footer;