import { Metadata } from "next";
import Profile from "../../_components/Profile";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <Profile />
    </div>
  );
};

export default ProfilePage;
