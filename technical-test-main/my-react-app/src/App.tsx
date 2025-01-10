import React, { useState, useEffect } from "react";
import PostList from "./assets/components/PostList";
import PostDetail from "./assets/components/PostDetail";

interface Post {
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Cargar datos de la API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Manejar la búsqueda
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Manejar la selección de un post
  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
  };

  // Cerrar los detalles del post
  const handleCloseDetail = () => {
    setSelectedPost(null);
  };

  return (
    <div className=" flex items-center justify-center min-h-screen bg-neutral-800 ">
      <PostList
        posts={posts}
        onSearch={handleSearch}
        onSelectPost={handleSelectPost}
      />
      <PostDetail post={selectedPost} onClose={handleCloseDetail} />
    </div>
  );
};

export default App;
