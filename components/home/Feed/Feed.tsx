import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import Post from "../../common/Post/Post";
import styles from "./Feed.style";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(({ posts }) => {
        setPosts(posts);
        // setIsLoading(false);
        console.log(typeof posts);
        console.log(posts);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // setIsLoading(false);
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
      <Text style={styles.feedTitle}>Nyt fra dine venner</Text>
      {posts?.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </View>
  );
}
