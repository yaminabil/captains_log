const React = require("react");



class Show extends React.Component {
    render(){
        const log = this.props.log;
        return (
            <html>
                
                <h1>this is the show page for {log.title} </h1>
                <a href="/index">go back to the index page </a>
                <p>{log.entry}</p>
                <p>the {log.title}  {log.shipIsBroken? 'its broken' : 'it is not broken '}</p>
                   
                
            </html>
        );
    }
}

module.exports=Show;