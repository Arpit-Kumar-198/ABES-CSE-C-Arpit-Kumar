import Address from './Address'
import Items from './Items'
import './OurMenu.css'
function OurMenu() {
    return (
        <div id="ourmenu">
            <h2>Our Menu</h2>
            <div id="items-container">
                <Items name="Pizza" imgsrc="src/assets/pizza.jpeg" rate="499"/>
                <Items name="Burger" imgsrc="src/assets/burger.jpeg" rate="199"/>
                <Items name="Noodles" imgsrc="src/assets/burger.jpeg" rate="299"/>
            </div>
            <Address add="Ghaziabad, UP, 201009"/>
        </div>
    )
}
export default OurMenu