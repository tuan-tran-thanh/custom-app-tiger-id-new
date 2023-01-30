import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";

import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Home from "./Home";

import styles from "./AppRouter.module.scss";
import Insight from "./Insight";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import SimpleDashboard from "./SimpleDashboard";

// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../contexts/Auth";
// import { AuthStatus } from "../contexts/Auth/state";
// const RedirectIfNotLoggedIn: React.FC = () => {
//     const auth = useAuth();
//     const shouldRedirectToLogin = auth.authStatus === AuthStatus.UNAUTHORIZED;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter: React.FC = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/insight" component={Insight} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/simpleDashboard" component={SimpleDashboard} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
