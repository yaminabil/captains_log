const React = require ("react");
const DefaultLayout =require("../layout/Default");


class MainPage extends React.Component {
    render() {
        return (
        <DefaultLayout>
             <h1><a href='/logs'>go to logs </a></h1> <br/>
             <h1> <a href='/foodlog'>go to foodlogs </a></h1> 
        </DefaultLayout>
        )
    }
}

module.exports=MainPage;