import Product from "./Product"
import img1 from '../img/ecouteur1.webp'
import img2 from '../img/ecouteur2.webp'
import img3 from '../img/ecouteur3.webp'
import img4 from '../img/ecouteur4.webp'
import img5 from '../img/ecouteur5.webp'
import img6 from '../img/ecouteur6.webp'
/**
 * @type {Product[]}
 */
const products = [
    new Product(   
        'Audio-Technica', 
        img1,
        `Découvrez une clarté sonore exceptionnelle avec le casque sans fil ATH-S220BT d'Audio-Technica, qui offre une autonomie
         jusqu'à 60 heures et une connectivité multipoint`,
        79.25
        ),
    new Product(
        'Audio-Technica ATH', 
        img2,
        `Profitez de l'audio sans fil et d'un design épuré pour écouter de la musique, regarder des films, jouer et bien plus encore.`,
        69.00
    ),
    new Product(
        'Marshall Mode', 
        img3,
        `Le Mode EQ offre un son énorme dans un petit format. Les haut-parleurs personnalisés offrent un son à haut rendement
         avec une distorsion minimale et le design intra-auriculaire unique s'ancre parfaitement dans l'oreille`,
        109.00
    ),
    new Product(
        'Sennheiser HD', 
        img4,
        `Avec sa conception circum-auriculaire fermée, le HD 569 offre une solution polyvalente à votre espace de divertissement domestique`,
        199.95
    ),
    new Product(
        'Grado Prestige', 
        img5,
        `La façon la plus simple de découvrir le son Grado, le SR60x produit une scène sonore impressionnante dans un casque abordable.`,
        149.99
    ),
    new Product(
        'Technics EAH-AZ40M2', 
        img6,
        `Du travail à la vie quotidienne, et tout ce qu'il y a entre les deux. Des haut-parleurs compacts mais puissants de 6 mm et une structure acoustique
         spéciale avec annulation active du bruit offrent un son clair sans fil, où que vous soyez. `,
        199.99
    )
]

export default products 