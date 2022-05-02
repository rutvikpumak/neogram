import "./App.css";
import { MainContainer, NavBar } from "./component";
import {
  Home,
  Modal,
  Profile,
  ProfileModal,
  Notification,
  Login,
  SignUp,
  Bookmark,
} from "./features";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./component/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="container relative mx-auto">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainContainer>
                  <Home />
                </MainContainer>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <MainContainer>
                  <Profile />
                </MainContainer>
              </PrivateRoute>
            }
          />
          <Route
            path="/notification"
            element={
              <PrivateRoute>
                <MainContainer>
                  <Notification />
                </MainContainer>
              </PrivateRoute>
            }
          />
          <Route
            path="/bookmark"
            element={
              <PrivateRoute>
                <MainContainer>
                  <Bookmark />
                </MainContainer>
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Modal />
        <ProfileModal />
      </Router>
    </div>
  );
}

export default App;
