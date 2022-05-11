import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainContainer, NavBar } from "./component";
import { PrivateRoute } from "./component/PrivateRoute/PrivateRoute";
import { getAllPost, getUserPost } from "./features/Home/postSlice";
import { getAllUser } from "./features/Profile/userSlice";
import {
  Home,
  Modal,
  Profile,
  ProfileModal,
  Notification,
  Login,
  SignUp,
  Bookmark,
  AnyProfile,
} from "./features";

function App() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getAllPost());
      dispatch(getAllUser());
      dispatch(getUserPost(user.username));
    }
  }, [token]);

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
          <Route
            path="/user-profile/:userId"
            element={
              <PrivateRoute>
                <MainContainer>
                  <AnyProfile />
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
