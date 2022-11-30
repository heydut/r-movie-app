import "./Admin.css";
import ReadUsers from "../components/ReadUsers";
import UpdateUser from "../components/UpdateUser";
import DeleteUser from "../components/DeleteUser";

const Admin = ({ user }) => {
  return (
    <div className="admin">
      {/* <ReadUsers /> */}
      <UpdateUser user={user} />
    </div>
  );
};

export default Admin;
