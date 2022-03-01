const React = require("react");


class Show extends React.Component {
    render () {
        const foodlog = this.props.foodlog;
        return (
            <html>
                <h1>this is the Show page for {foodlog.name} </h1> 
                <h2><a href="/foodlog">go back to the index page </a></h2>
                <h3>the type of food was {foodlog.name} and  was served on  {foodlog.meal}</h3>
                {
                    foodlog.wasItGood? <h3>the food was very good</h3>:<h3>the food was bad</h3>
                }
                <h4>click <a href={`/foodlog/${foodlog._id}/edit`}>here</a> if you want to edit this foodlog</h4>
            </html>
        )
    }
}

module.exports = Show ;