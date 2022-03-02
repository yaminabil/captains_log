const React = require("react");
const DefaultLayout =require("../layout/Default");



class Edit extends React.Component {
    render () {
        const foodlog = this.props.foodlog ;
        console.log(  "test => " +foodlog._id);
        return (
            <DefaultLayout>
                <h1> Edit page for {foodlog.name} </h1>
                <h2><a href={ `/foodlog/${foodlog._id}` }> go back to the show page </a></h2>
                  
                <form   action={`/foodlog/${foodlog._id}?_method=PUT`} method="POST">
                    
                <li className="info"> <p class="diffrent"> name : </p> <input name="name" type ="text" value={foodlog.name} /> </li><br />
                <li className="info"> <p class="diffrent"> meal : </p><input name="meal" type="text" value={foodlog.meal}/></li> <br />
                <li className="info"> <p class="diffrent"> was It Good : </p>{ 
                       foodlog.wasItGood? <input name="wasItGood" type="checkbox" defaultChecked/>:
                       <input name="wasItGood" type="checkbox"/>
                    }
                    </li><br /><input className="submit" type="submit" />
                    
                </form>
            </DefaultLayout>
        )
       
    }
}

module.exports = Edit;





{/* time created at  :  {foodlog.createdAt.toLocaleTimeString()} <br />
                    date created at : {foodlog.createdAt.toLocaleDateString()}  <br /> */}