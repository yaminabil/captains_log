const React=require("react");



class Index extends React.Component {


    render() {
        const logs = this.props.logs;
        return(
            <html>
                <h1>this is the index page </h1>
                <a href="/new">Create new log click here </a>
                <ul>
                {
                    
                    logs.map(log=>{
                        return (
                            <li key ={`${log._id}`}><a href={`/show/${log._id}`}>  {log.title}</a>


                            <form action ={`/index/${log._id}?_method=DELETE`}  method ="POST" >
                              <input type ="submit"  value={`DELETE ${log.title}`}/>
                            </form>

                            </li>
                            
                        )
                    })
                }
                </ul>
                
               
            </html>
        )
    }
}

module.exports=Index;