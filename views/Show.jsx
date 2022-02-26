const React = require("react");



class Show extends React.Component {
    render(){
        const log = this.props.log;
        return (
            <html>
                
                <h1>this is the show page for {log.title} </h1>
                <a href="/logs">go back to the index page </a>
                <p>{log.entry}</p>
                <p>the ship  {log.shipIsBroken? 'is broken' : ' is not broken '}</p>
                <p>if you want to edit  this log click <a href={`/logs/${log._id}/edit`}>here</a></p>
                   
                
            </html>
        );
    }
}

module.exports=Show;