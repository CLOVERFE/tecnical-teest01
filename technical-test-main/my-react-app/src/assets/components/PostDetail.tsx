import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostDetailProps {
  post: Post | null; // Recibe el post seleccionado o null si no hay ninguno
  onClose: () => void; // Función para cerrar los detalles
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
        <button
          className="mt-4 bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-600"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
