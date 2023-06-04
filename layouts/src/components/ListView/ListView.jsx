import ShopItem from "./ShopItem";

export default function ListView(props) {
    const cards = props.products.map(card => <ShopItem card={card} />);

    return (
        <div className="list-view">
            {cards}
        </div>
    )
}
