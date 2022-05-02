import "./App.css";
import { MainContainer, NavBar } from "./component";
import { Home, Modal, Profile, ProfileModal, Notification, Login, SignUp, Bookmark } from "./features";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container relative mx-auto">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <MainContainer>
                <Home />
              </MainContainer>
            }
          />
          <Route
            path="/profile"
            element={
              <MainContainer>
                <Profile />
              </MainContainer>
            }
          />
          <Route
            path="/notification"
            element={
              <MainContainer>
                <Notification />
              </MainContainer>
            }
          />
          <Route
            path="/bookmark"
            element={
              <MainContainer>
                <Bookmark />
              </MainContainer>
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
