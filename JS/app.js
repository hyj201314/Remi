/**
 * Created by hanyajie on 16-1-26.
 */
var ReactRouter = window.ReactRouter;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var routes = (
    <Router>
    <Route path="/" component={window.Main}>
    <Route path="calendar" component={window.CalendarHeader}/>
    </Route>
    </Router>
);
ReactDOM.render(routes, document.getElementById('root'));