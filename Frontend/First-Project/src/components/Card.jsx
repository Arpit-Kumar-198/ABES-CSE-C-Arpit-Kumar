import './card.css';
function Card(props) {
  return (
    <div id='adi'>
      <img src="src/assets/download.jpeg" alt="cartoon" />
      <h2>{ props.name ? props.name : "Pikachu" }</h2>
      <p>{ props.course ? props.course : "HP : 1000" }</p>
    </div>
  )
}
export default Card;