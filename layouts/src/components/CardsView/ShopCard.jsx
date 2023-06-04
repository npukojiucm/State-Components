export default function ShopCard(props) {

    return (
        <div className="shop-card">

            <h2 className="card-name">
                {props.card.name}
            </h2>

            <span className="card-color">
                {props.card.color}
            </span>

            <div className="container-img">
                <img className="card-img" alt={props.card.name} src={props.card.img} />
            </div>

            <div className="card-footer">
                <div className="card-price">
                    &#36;{props.card.price}
                </div>
                <button className="btn-add-cart" type="button">Add to cart</button>
            </div>


        </div>
    )
}
