const React = require("react");
const DefaultLayout =require("../layout/Default");


class Show extends React.Component {
    render () {
        const foodlog = this.props.foodlog;
        return (
            <DefaultLayout>
                <h1>Food-Log : {foodlog.name} </h1> 
                <h2><a href="/foodlog">go back to the index page </a></h2>
                <div id="time">
                <h3>the type of food was {foodlog.name} and  was served on  {foodlog.meal}</h3>
                {
                    foodlog.wasItGood? <h3>the food was very good</h3>:<h3>the food was bad</h3>
                }
                <h4>click <a href={`/foodlog/${foodlog._id}/edit`}>here</a> if you want to edit this foodlog</h4>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show ;