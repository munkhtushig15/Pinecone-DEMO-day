import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Unsign from "./pages/Unsign/Unsign";
import MyBlogs from "./pages/Blog/myBlogs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import CreatePost from "./pages/CreatePost/Create";
import Favorite from "./pages/Favorites/Favorite";
import Blog from "./pages/Blog/Blog";
import Mountian from "./pages/Blog/Mountian";
import City from "./pages/Blog/City";
import Forest from "./pages/Blog/Forest";
import Beach from "./pages/Blog/Beach";
import Land from "./pages/Blog/Land";
import Mongolia from "./comps/16 uls l gehes/Mongolia";
import Switzerland from "./comps/16 uls l gehes/Switzerland";
import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:9911/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Unsign />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route path="/Create" element={<CreatePost />} />
          <Route path="/myBlogs" element={<MyBlogs />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Favorites" element={<Favorite />} />

          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/Mountian" element={<Mountian />} />
          <Route path="/City" element={<City />} />
          <Route path="/Beach" element={<Beach />} />
          <Route path="/Forest" element={<Forest />} />
          <Route path="/Land" element={<Land />} />

          <Route path="/Home/Mongolia" element={<Mongolia />} />
          <Route path="/Home/Switzerland" element={<Switzerland />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
