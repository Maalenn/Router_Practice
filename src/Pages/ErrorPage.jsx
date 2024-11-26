import { Link } from "react-router-dom";
import ErrorImg from "../assets/error.png";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={ErrorImg} alt="errorImg" />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
