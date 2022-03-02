const React = require("react");
const DefaultLayout =require("../layout/Default");



class Show extends React.Component {
    render(){
        const log = this.props.log;
        return (
            <DefaultLayout title={`Log : ${log.title}`}>
                
                
                <a href="/logs">  go back to the index page </a>
                <div id="time">
                <p>{log.entry}</p>
                <p id="time"> Date was created :  {log.createdAt.toLocaleDateString()} @ {log.createdAt.toLocaleTimeString()}</p>
                <p>the ship  {log.shipIsBroken? 'is broken' : ' is not broken '}</p>
                <p>if you want to edit  this log click <a href={`/logs/${log._id}/edit`}>here</a></p>
                </div>
                
            </DefaultLayout>
        );
    }
}

module.exports=Show;