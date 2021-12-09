import React, { useState, useEffect } from "react";
import PostContainer from "../../components/PostContainer";
import axios from "axios";
import Posts from "../../components/PostContainer";

function buildAxios() {
  return axios.create({
    baseURL: "http://165.227.102.26:3000",
    timeout: 10000,
  });
}

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    buildAxios()
      .get(`/api/posts`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.posts);
        console.log(posts);
      });
  }, []);
  return (
    <div className="container px-20 py-10 space-y-5">
      <p className="text-4xl">Krisha Posts</p>
      <div className="space-y-4">
        {posts.map((item) => {
          return (
            <PostContainer
              key={item.id}
              title={item.title}
              city={item.city}
              price={item.price}
              imgURl={item.image_url}
              description={item.description}
              date={item.created_at}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
