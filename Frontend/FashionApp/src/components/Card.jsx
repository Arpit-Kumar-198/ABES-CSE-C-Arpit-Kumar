import "./Card.css"
function Card({ product }) {
    return (
        <div className="product-card">
            <h3 id="category">{ product.category }</h3>
            <p id="desc">{ product.description }</p>
            <img id="image" src={ product.image } alt="product-img" />
            <h3 id="price">Price: <span>₹{ product.price }</span></h3>
            <p id="rating">Rating: <span>{ product.rating.rate }</span></p>
        </div>
    )
}
export default Card