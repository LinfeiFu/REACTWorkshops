import "./App.css";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import React, { useEffect, useState } from "react";
import axois from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerpage = 10;
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axois.get("https://jsonplaceholder.typicode.com/posts");
      console.log("res", res);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []); //dependencies

  //get posts of the active page
  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  //change active page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className="container mt-5">
      <h1>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination 
        postsPerpage = {postsPerpage}
        totalPosts = {posts.length}
        paginate = {paginate}
        currentPage = {currentPage}
      />
    </div>
  );
}

export default App;
