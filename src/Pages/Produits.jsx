import { useState } from "react";
import { produits } from "../assets/assets";
const Produits = () => {

    const [search, setSearch] = useState("");
    const filtredProduct = produits.filter((p) => p.titre.toLowerCase().includes(search.toLowerCase().trim()))
    return (
        <div className="prodContainer">
            <h1>VOS PRODUITS SONT EXCELLENTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi aliquam natus cupiditate. Voluptates nihil vitae perferendis voluptatum rerum.</p>
            <div className="content">
                <div className="input-box">
                    <label>Rechercher un produit...</label>
                    <input type="search" placeholder="..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className="cards">
                    {filtredProduct.map((produit) => (
                        <div key={produit.id}>
                            <img src={produit.img} alt={produit.titre}/>
                            <h2>{produit.titre}</h2>
                            <p>{produit.description}</p>
                            <span>{produit.prix} MAD</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Produits