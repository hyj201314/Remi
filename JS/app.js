/**
 * Created by hanyajie on 16-1-26.
 */
var ReactRouter = window.ReactRouter;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var routes = (
    < Router  >
        <Route path="/" component={window.Main}>
            <Route path="calendar" component={window.CalendarControl}/>
        </Route>
    </Router>
);
ReactDOM.render(routes, document.getElementById('root'));