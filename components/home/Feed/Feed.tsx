import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../../common/Post/Post";

export default function Feed() {
  const [posts, setPosts] = useState({});
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     axios
  //       .get("https://dummyjson.com/posts")
  //       .then((response) => {
  //         setPosts(response.data.data);
  //         // setIsLoading(false);
  //         console.log(typeof posts);
  //         console.log(posts);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data: ", error);
  //       })
  //       .finally(() => {
  //         // setIsLoading(false);
  //       });
  //   }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(typeof data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  }, []);

  //   const refetch = () => {
  //     setIsLoading(true);
  //     fetchData();
  //   };

  return (
    <View>
      {/* {posts && <Text>{JSON.stringify(posts)}</Text>} */}
      {/* {<Text>{posts?.limit}</Text>} */}

      {/* {posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))} */}
      {posts.posts?.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </View>
  );
}
