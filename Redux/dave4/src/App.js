import React from "react";
import PostsList from "./features/post/PostsList";
import AddPostForm from "./features/post/AddPostForm";
import SinglePostPage from "./features/post/SinglePostPage";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import EditPostForm from "./features/post/EditPostForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
