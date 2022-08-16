import { useSelector } from "react-redux/es/exports";

import { selectAllUsers } from "../users/UsersSlice";

const PostAuthor = ({userId}) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown Author"}</span>;
};

export default PostAuthor;
