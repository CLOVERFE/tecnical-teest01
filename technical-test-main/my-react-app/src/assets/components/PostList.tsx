import React, { useState } from "react";
import PostItem from "./PostItem";

//

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
  onSearch: (searchTerm: string) => void;
  onSelectPost: (post: Post) => void; // Función para manejar la selección de un post
}

const PostList: React.FC<PostListProps> = ({
  posts,
  onSearch,
  onSelectPost,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Informa al padre sobre el término de búsqueda
  };

  const filteredPosts = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 4);

  return (
    <div className=" ">
      <h1 className="text-center text-3xl h-6 text-white font-bold ">
        Lista de Posts
      </h1>
      <input
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border py-3 px-80 rounded  bg-slate-300 hover:bg-slate-200 my-10 "
      />
      {searchTerm ? (
        <div>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} onClick={() => onSelectPost(post)}>
                <PostItem title={post.title} body={post.body} />
              </div>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      ) : (
        <p className="text-center text-white">
          Escribe algo para buscar posts.
        </p>
      )}
    </div>
  );
};

export default PostList;
