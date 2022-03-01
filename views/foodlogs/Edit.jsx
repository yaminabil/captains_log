const React = require("react");



class Edit extends React.Component {
    render () {
        const foodlog = this.props.foodlog ;
        console.log(  "test => " +foodlog._id);
        return (
            <html>
                <h1> This is the edit page for {foodlog.name} </h1>
                <h2><a href={ `/foodlog/${foodlog._id}` }> go back to the show page </a></h2>
                  
                <form   action={`/foodlog/${foodlog._id}?_method=PUT`} method="POST">
                    
                    name : <input name="name" type ="text" value={foodlog.name} /> <br />
                    meal : <input name="meal" type="text" value={foodlog.meal}/> <br />
                    was It Good : { 
                       foodlog.wasItGood? <input name="wasItGood" type="checkbox" defaultChecked/>:
                       <input name="wasItGood" type="checkbox"/>
                    }
                    <br /><input type="submit" />
                    
                </form>
            </html>
        )
       
    }
}

module.exports = Edit;





{/* time created at  :  {foodlog.createdAt.toLocaleTimeString()} <br />
                    date created at : {foodlog.createdAt.toLocaleDateString()}  <br /> */}