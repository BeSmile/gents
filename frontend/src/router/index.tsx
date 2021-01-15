import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from '../utils/history';
import { connect } from 'react-redux';
import Toast from '@atom/Toast';
import ThemeLayout from '@layouts/ThemeLayout';
import isArray from 'lodash/isArray';
import routes from './config';
import { isEmpty } from 'lodash';
//
const mapToProps = state => {
    return { login: state.login };
};

// 404 页面
const NotFound = lazy(() => import(`../pages/NotFound/index`));

const ProtectRouter = ({ path, component: Component, ...props }) => {
    const BaseRouter = (props) => {
        const { login: { loggedIn } } = props;
        return (
            !loggedIn ? (
                <Redirect to="/login" />
            ) : (
                <Component/>
            )
        )
    };

    const BaseComponent = connect(mapToProps)(BaseRouter);

    return (
        <Route path={path} {...props} component={BaseComponent} />
    )
};

//生成子路由页面
const generateChildRouter = (path: string, routes: Array<any>): Array<React.ReactElement> => {
    let RouteUI = routes.reduce((UI, item) => {
        const isArrayStatus = isArray(item.authority);
        // 根据路径懒加载页面
        const RouteComponent = lazy(() => import(`../pages/${item.component}`));
        const RenderRoute = isArrayStatus && item.authority.length > 0 ? ProtectRouter : Route;
        UI.push(
            <RenderRoute exact key={`${path}${item.path}`} path={`${path}${item.path}`} component={RouteComponent}/>
        )
        return UI;
    }, []);
    RouteUI.push(<Route key={`${path}@not-found`} component={NotFound}/>)
    return RouteUI;
}

//父路由
const generateRouter = (routes: Array<any>): Array<React.ReactElement> => {
    const RoutersUI = routes.reduce((RouteUI, item)=> {
        console.log(item.component)
        const LayoutUI = isEmpty(item.component)?React.Fragment : lazy(() => import(`../${item.component}`));
        RouteUI.push(
            <Route key={item.path} path={item.path}>
                <LayoutUI>
                    <Switch>
                        {generateChildRouter(item.path, item.routes)}
                    </Switch>
                </LayoutUI>
            </Route>
        );
        return (
            RouteUI
        )
    }, []);
    return RoutersUI;
}


// 这是主路由
const RouteUI = function(props) {
  console.log(props, 'props');
  
    return (
        <Router history={history}>
            <ThemeLayout>
                <Toast/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {generateRouter(routes)}
                        <ProtectRouter path="/domain" component={() => (
                            <div>domain</div>
                        )} />
                    </Switch>
                </Suspense>
            </ThemeLayout>
        </Router>
    )
};

export default RouteUI;
