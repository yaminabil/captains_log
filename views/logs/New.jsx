const React = require ("react");
const DefaultLayout =require("../layout/Default");


class New extends React.Component {
   render ()  {
       return (
           <DefaultLayout title = {"welcome to the new page "}>
           
           <a href="/logs">go back to index page</a>

           <form action="/logs" method="POST">   
               
             <li className="info"><p class="diffrent">title :  </p>      <input id="title-new" name= "title" type="text" /> </li> <br/>
             <li className="info"><p class="diffrent">entry :</p>       <textarea name="entry"/>  </li> <br/>
              <li className="info"><p class="diffrent"> shipIsBroken :</p> <input   name ="shipIsBroken" type="checkbox"/> </li><br/>
                             <input className="submit" type="submit" value="submit" />

           </form>
       
       </DefaultLayout>
           
       )
   }
 }

 module.exports = New;