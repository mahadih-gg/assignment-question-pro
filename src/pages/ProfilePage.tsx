import { useAuth } from "../context/AuthContextProvider";

const ProfilePage = () => {
  const { userData, setUserData } = useAuth();
  return (
    <div className="w-full py-section">
      <form
        action=""
        className="grid gap-4 border border-light p-10 bg-gray-50 rounded-md w-1/2"
      >
        <input
          type="text"
          defaultValue={userData?.name}
          name="name"
          onChange={(e) =>
            setUserData((prevState) => ({ ...prevState, name: e.target.value }))
          }
          placeholder="Enter your name"
          className="border border-gray-400 p-3 rounded-md"
        />

        <input
          type="email"
          defaultValue={userData?.email}
          name="email"
          onChange={(e) =>
            setUserData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
          placeholder="Enter your name"
          className="border border-gray-400 p-3 rounded-md"
        />
      </form>
    </div>
  );
};

export default ProfilePage;
