import icon1 from '../Images/icon1.png'
import icon2 from '../Images/icon2.png'
import icon3 from '../Images/icon3.png'
import icon4 from '../Images/icon4.png'

const Cards = () => {
    return (  
        <div className="items">
            <div className="card">
                <img src={icon1} alt="Ironhack logo"/>
                <h3> Declarative </h3>
                <p> React makes it painless to create interactive UIs. </p>
            </div> 
            <div className="card">
                <img src={icon2} alt="Ironhack logo" />
                <h3> Components </h3>
                <p> Build encapsulated components that manage their state. </p>
            </div>
            <div className="card">  
                <img src={icon3} alt="Ironhack logo" />
                <h3> Single-Way </h3>
                <p> A set of immutable values are passed to the component's. </p>
            </div>
            <div className="card">
                <img src={icon4} alt="Ironhack logo" />
                <h3> JSX </h3>
                <p> Statically-typed, designed to run on modern browsers. </p>
            </div>
        </div>
)}

export default Cards;