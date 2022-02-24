const React = require ("react");


class New extends React.Component {
   render ()  {
       return (
           <html>
               <div>
                   <h1> welcome to the new page </h1>
                   <a href="/index">go back to index page</a>
                   <form action="/logs" method="POST">
                      title :  <input name= "title" type="text" /><br/>
                      entry : <textarea name="entry"/><br/>
                      shipIsBroken : <input name ="shipIsBroken" type="checkbox"/><br/>
                              <input type="submit" value="submit" />

                   </form>
               </div>
           </html>
       )
   }
 }

 module.exports = New;