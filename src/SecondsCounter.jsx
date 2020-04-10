import React from 'react';
class SecondsCounter extends React.Component {
    render(props){
    return ( <div className="counter"> {this.props.seconds} </div> )
    }
}

export default SecondsCounter;