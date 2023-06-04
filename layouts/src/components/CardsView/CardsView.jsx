import ShopCard from "./ShopCard";

export default function CardsView(props) {
    const cards = props.products.map(card => <ShopCard card={card} />);

    return (
        <div className="cards-view">
            {cards}
        </div>
    )
}
