import React from 'react';
import "jquery";
import 'bootstrap';
class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            algo: 'algo'
        }
    }
    render() {
        return (
            <div className="card">
            <img className="card-img-top" src="http://via.placeholder.com/350x150" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        )
    }
}

export default Card;