const React=require("react");
const { modelName } = require("../models/log");


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
                            <li key ={`${log._id}`}><a href="/show">  {log.title}</a></li>
                        )
                    })
                }
                </ul>
                
               
            </html>
        )
    }
}

module.exports=Index;