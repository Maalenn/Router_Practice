import { Link, useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const data = useLoaderData();
  const { id, name, username, email } = data;
  return (
    <div className="user-detail">
      <h3>User ID: {id}</h3>
      <h3>Name: {name}</h3>
      <h3>Username: {username}</h3>
      <h3>Email: {email}</h3>
      <Link to="/user">Back</Link>
    </div>
  );
};

export const userDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if(!res.ok){
    throw new Error("Can't find this user")
  }
  return res.json();
};

export default UserDetail;
