import { useDispatch, useSelector } from "react-redux";
import avatar from "../assets/profile.jpg";
import { BiSolidUser } from "react-icons/bi";
import { useEffect, useState } from "react";
import { fetchUserProfile } from "../redux/features/profile/profileThunks";

const Header = ({ role }) => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    if (role === "seller") {
      dispatch(fetchUserProfile(role));
    }
  }, [dispatch, role]);
  useEffect(() => {
    if (profileState.profileData) {
      setProfileData(profileState.profileData);
    }
  }, [profileState.profileData]);

  return (
    <div className="font-roboto flex justify-end items-center p-4 sticky top-0 bg-slate-100 z-10">
      <div className="flex items-center space-x-2">
        {role === "admin" ? (
          <>
            <span>Admin</span>
            <div className="w-8 h-8 rounded-full border border-black flex justify-center items-center">
              <BiSolidUser size={20} />
            </div>
          </>
        ) : profileState.profileLoading ? (
          <span>Loading...</span>
        ) : profileState.profileError ? (
          <span>Error: {profileState.profileError}</span>
        ) : (
          <>
            <span>{profileData.user_name}</span>
            <img src={profileData.user_img || avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
