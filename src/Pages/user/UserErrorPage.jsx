import { Link } from "react-router-dom";
import ErrorImg from "../../assets/error.png";

const UserErrorPage = () => {
  return (
    <div className="error-page">
      <img src={ErrorImg} alt="errorImg" />
      <Link to="/user">Back to Home</Link>
    </div>
  );
};

export default UserErrorPage;
