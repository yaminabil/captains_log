const React = require("react");



class Edit extends React.Component {
    render () {
        const log = this.props.log;
        return (
            <div>
              <h1>this is the edit page for {log.title}   </h1>
              
              <form action={`/logs/${log._id}?_method=PUT`} method="POST" >

               title : <input name ="title" type="text" value={log.title} /> <br/>
               entry : <textarea name ="entry" type ="text"  value={log.entry}/><br/>
               shipIsBroken :{
                   log.shipIsBroken? <input name="shipIsBroken" type="checkbox"  defaultChecked/> :
                   <input name="shipIsBroken" type="checkbox"/>
               }
               <br/><input type="submit"/>
              </form>
            </div>
        )
    }
}

module.exports = Edit;