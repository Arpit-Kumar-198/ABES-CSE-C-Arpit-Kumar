import Card from "./Card"
import './Fashion.css'
function Fashion({books}) {
    return (
        <div className="container">
            {books.map(each => <Card key={each.id} product={ each }/>)}
        </div>
    )
}
export default Fashion