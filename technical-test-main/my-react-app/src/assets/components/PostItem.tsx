import React from "react";

interface PostItemProps {
  title: string;
  body: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, body }) => {
  return (
    <div className="border p-4 rounded hover:invert bg-slate-900  cursor-pointer text-center w-200  ">
      <h3 className="text-lg font-semibold text-white ">{title}</h3>
      <p className="text-white">{body.substring(0, 50)}...</p>
    </div>
  );
};

export default PostItem;
