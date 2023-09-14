import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Anime from "./pages/anime";
import Movies from "./pages/movies";
import Series from "./pages/series";
import Layout from "./hocs/Layout";
import ResetPassword from "./pages/reset_password";
import ResetPasswordConfirm from "./pages/reset_password_confirm";
import Activate from "./pages/activate";
import store from "./store";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/anime" element={<Anime />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </Layout>
    </Router>
  </Provider>
);

export default App;
