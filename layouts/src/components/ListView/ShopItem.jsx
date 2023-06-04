export default function ShopItem(props) {
    return (
        <div className="shop-item">
            <div className="container-img">
                <img src={props.card.img} alt={props.card.img} className="item-img"/>
            </div>
            <div className="item-name">
                {props.card.name}
            </div>
            <div className="item-color">
                {props.card.color}
            </div>
            <div className="item-price">
                &#36;{props.card.price}
            </div>

            <button className="btn-add-cart">Add to cart</button>

        </div>
    )
}
