const React=require("react");
const DefaultLayout =require("../layout/Default");


class Index extends React.Component {


    render() {
        const logs = this.props.logs;
        return(
            <DefaultLayout title = {"logs index page "}>
            
                <a id="create" href="/logs/new">Create new log click here </a>
                <ul>
                {
                    
                    logs.map(log=>{
                        return (
                            <li key ={`${log._id}`}><a href={`/show/${log._id}`}>  {log.title}</a>


                            <form action ={`/logs/${log._id}?_method=DELETE`}  method ="POST" >

                              <input className="delete" type ="submit"  value={`DELETE ${log.title}`}/>
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

module.exports=Index;