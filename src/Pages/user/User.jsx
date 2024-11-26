import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h4>user id: {id}</h4>
    </div>
  );
};

export default User;
