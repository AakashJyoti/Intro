import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "./authSlice";
import { Link } from "react-router-dom";

import React from "react";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome User ${user}!` : "welcome";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const content = (
    <section className="welcome">
      <h1>{welcome}</h1>
      <p>{tokenAbbr}</p>
      <p>
        <Link to="/userlist">Go to Users</Link>
      </p>
    </section>
  );

  return content;
};

export default Welcome;
