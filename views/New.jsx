const React = require ("react");


class New extends React.Component {
   render ()  {
       return (
           <html>
               <div>
                   <h1> welcome to the new page </h1>
                   <form action="/logs" method="POST">
                      title :  <input type="text" /><br/>
                      entry : <textarea/><br/>
                      shipIsBroken : <input type="checkbox"/><br/>
                              <input type="submit" value="submit" />

                   </form>
               </div>
           </html>
       )
   }
 }

 module.exports = New;