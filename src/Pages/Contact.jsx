import { useState } from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [NumCmd, setNumCmd] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");

    const sujets = [
        "Question sur un produit",
        "Suivi de commande",
        "Retour / Remboursement",
        "Problème technique",
        "Garantie / SAV",
        "Paiement / Facturation",
        "Autre",
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("access_key", "f6b396c6-86d0-461a-9fc6-1e79a1d4f306");

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
            .then((res) => res.json())
            .then((result) =>{
                if(result.success){
                    alert("Message envoye avec succes !");
                }else {
                    alert("Erreur lors de l'envoi !");
                }
            })
            .catch((error) =>{
                console.log(error);
            })
        
        setName("");
        setEmail("");
        setPhone("");
        setNumCmd("");
        setSujet("");
        setMessage("");
    }

    return (
        <>
            <div className="contactContainer">
                <div className="left-content">
                    <span>Support 7j/7</span>
                    <h1>Une question ?<br />Contactez-nous</h1>
                    <p>Une question sur un produit,une commande ou un retour ?<br />Notre equipe vous repond sous 24h.</p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <MdEmail size={22} />
                            <span>contact@TechShop.com</span>
                        </div>
                        <div className="contact-item">
                            <FaPhone size={20} />
                            <span>+212 6 00 00 00 00</span>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt size={20} />
                            <span>Casablanca, Maroc</span>
                        </div>
                    </div>
                </div>
                <form className="form-content" onSubmit={handleSubmit}>
                    <h2>Envoyez-nous un message</h2>
                    <div className="row">
                        <div className="input-content">
                            <label>Nom complet</label>
                            <input name="name" type="text" placeholder="Votre nom" value={name} required onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div  className="input-content">
                            <label>Email</label>
                            <input name="email" type="email" placeholder="example@gmail.com" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div  className="input-content">
                            <label>Telephone</label>
                            <input name="phone" type="tel" placeholder="06 00 00 00 00" value={phone} required onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div  className="input-content">
                            <label>Num de commande</label>
                            <input name="NumCmd" type="text" placeholder="Optionnel" value={NumCmd} onChange={(e) => setNumCmd(e.target.value)}/>
                        </div>
                    </div>
                    <div className="input-content">
                            <label>Sujet</label>
                            <select name="sujet" id="sujet" value={sujet} onChange={(e) => setSujet(e.target.value)} required>
                                <option>Choisir un sujet</option>
                                {sujets.map((sujet) => (
                                    <option key={sujet}>{sujet}</option>
                                ))}
                            </select>
                    </div>
                    <div className="input-content">
                            <label>Message</label>
                            <textarea name="message" placeholder="Ecrivez votre message..." value={message} required onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button>Envoyer</button>
                </form>
            </div>
        </>
    )
}

export default Contact