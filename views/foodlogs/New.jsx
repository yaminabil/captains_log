const React =require ("react");



class New extends React.Component {
    
     render() {
         return (
             <html>
                 <h1> this the page for new food log</h1>
                 <h2><a href="/foodlog">go back to index page </a></h2>
                 <form action="/foodlog" method="POST">
                 name : <input name="name"   type ="text" /> <br/>
                 meal:  <input name="meal"   type ="text" /> <br/>
                 wasItGood:  <input name="wasItGood" type="checkbox" /><br/>
                 <input type="submit" value="submit"/>
                 </form>
             </html>
         )
     }
}

module.exports = New;