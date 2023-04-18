import { instance } from "../App";
import { useEffect, useState } from "react";
import "../App.css";
import Blog from "./Blog";

const Blogs = () => {
  const [data, setData] = useState([]);
  const getBlogs = async () => {
    try {
      const res = await instance.get("/blogs");
      setData(
        res.data.data.map((el) => {
          return el;
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="blogsContainer">
      <div className="blogsContainer">
        <Blog />
      </div>
    </div>
  );
};
export default Blogs;
