const React =require("react");
const DefaultLayout =require("../layout/Default");


class Index extends React.Component {
    render() {
        const foodlogs = this.props.foodlogs ;
        // console.log("received : " + foodlogs);
        return (
            <DefaultLayout>
                <h1> Food logs</h1>
                <h2><a href = "/foodlog/new">create new food log </a></h2> 
                <ul>
                    {
                        
                        foodlogs.map( (foodlog)=> {
                            return (

                            <li key= {`${foodlog._id}`}>  <a href={`/foodlog/${foodlog._id}`}>{foodlog.name}</a> 
                            <form action ={`/foodlog/${foodlog._id}?_method=DELETE`}   method="POST"> 
                            
                            <input className="delete" value={`Delete ${foodlog.name.toUpperCase()}`} type ="submit" />
                            </form>
                            </li>
                            )
                            
                        })
                    }
                </ul>
                <a href="/" className="back">back</a>

            </DefaultLayout>
        )
    }
}

module.exports = Index;