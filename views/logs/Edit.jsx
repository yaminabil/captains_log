const React = require("react");
const DefaultLayout =require("../layout/Default");



class Edit extends React.Component {
    render () {
        const log = this.props.log;
        return (
         <DefaultLayout>
              <h1>this is the edit page for {log.title}   </h1>
           

              <form action={`/logs/${log._id}?_method=PUT`} method="POST" >

              <li className="info"> <p class="diffrent">title : </p><input name ="title" type="text" value={log.title} />  </li><br/>
              <li className="info"> <p class="diffrent">entry : </p><textarea name ="entry" type ="text"  value={log.entry}/></li><br/>
              <li className="info"> <p class="diffrent"> shipIsBroken : </p>{
                   log.shipIsBroken? <input name="shipIsBroken" type="checkbox"  defaultChecked/> :
                   <input name="shipIsBroken" type="checkbox"/>
               }</li>
               <br/><input className="submit" type="submit"/>
              </form>
            
              </DefaultLayout>
        )
    }
}

module.exports = Edit;