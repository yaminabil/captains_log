const React =require ("react");
const DefaultLayout =require("../layout/Default");


class New extends React.Component {
    
     render() {
         return (
             <DefaultLayout>
                 <h1> this the page for new food log</h1>
                 <h2><a href="/foodlog">go back to index page </a></h2>
                 <form action="/foodlog" method="POST">
                 <li className="info"><p class="diffrent"> name : </p> <input name="name"   type ="text" /> </li><br/>
                 <li className="info"><p class="diffrent"> meal: </p> <input name="meal"   type ="text" /> </li><br/>
                 <li className="info"><p class="diffrent">  wasItGood: </p> <input name="wasItGood" type="checkbox" /> </li><br/>
                 <input type="submit" className="submit" value="submit"/>
                 </form>
             </DefaultLayout>
         )
     }
}

module.exports = New;