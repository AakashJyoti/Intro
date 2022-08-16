import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { fetchUsers } from "./features/users/usersSlice";
import { extendedApiSlice } from "./features/post/postSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
