import { Route, Redirect } from "react-router-dom";
import { useUserStore } from "../state/store";

const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        if (isLoggedIn) {
          return <Component path={path} {...rest} {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
