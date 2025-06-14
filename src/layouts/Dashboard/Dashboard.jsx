import { useUser } from "../../context/User/UserContext";

const Dashboard = () => {
  console.log(useUser());
  return (
    <div>
      <h1>Dashboard!</h1>
    </div>
  );
};

export default Dashboard;
