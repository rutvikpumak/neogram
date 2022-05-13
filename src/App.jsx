import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainContainer, NavBar } from "./component";
import { PrivateRoute } from "./component/PrivateRoute/PrivateRoute";
import { getAllPost, getUserPost } from "./features/Home/postSlice";
import { getAllUser } from "./features/Profile/userSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import {
  Home,
  Modal,
  Profile,
  ProfileModal,
  Explore,
  Login,
  SignUp,
  Bookmark,
  AnyProfile,
} from "./features";
import { Loader } from "./component/Loader/Loader";

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
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
            path="/explore"
            element={
              <PrivateRoute>
                <MainContainer>
                  <Explore />
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
