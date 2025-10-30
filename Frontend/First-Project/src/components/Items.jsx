import './Items.css'
function Items(props) {
    return (
        <div id="item-card">
            <h3>{props.name}</h3>
            <img  id="item-img" src={ props.imgsrc } alt="item-img" />
            <p>Rate: { props.rate }</p>
        </div>
    )
}
export default Items