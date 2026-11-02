import { assets } from "../assets/assets"

const Acceuil = () => {
    return (
        <div className="hero">
            <div className="leftContent">
                <span className="Badge">⚡Nouveautés Tech 2026 - Stocks Limités</span>
                <h1 className="title">Tech pour les passionnés</h1>
                <p className="des">Retrouvez les meilleurs casques, AirPods haute fidélité, manettes de jeu et gadgets électroniques au meilleur prix. Qualité garantie, livraison rapide partout au Maroc et service client réactif.</p>
                <div className="home-btn">
                    <button>Explorer la boutique</button>
                    <button>Contactez Nous</button>
                </div>
            </div>
            <div className="rightContent">
                <img className="main-img" src={assets.imageHome} alt="Image"/>
            </div>
        </div>
    )
}

export default Acceuil