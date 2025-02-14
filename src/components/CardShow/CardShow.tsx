import { CardList } from "@/interface/CardData"
import { useEffect } from "react";
import { Link } from "react-router-dom";


interface CardShowProps {
    card: CardList;
}

const CardShow = ({ card }: CardShowProps) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [card]);

    return (
        <Link to={`/detail/${card.name}`}>
            <img src={card.card_images[0].image_url_small} alt="" className="drop-shadow-lg hover:border-6 
            border-violet-400 h-auto w-64" />
        </Link>
    )
}

export default CardShow