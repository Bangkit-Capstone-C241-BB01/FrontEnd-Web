import { useDispatch, useSelector } from "react-redux";
import avatar from "../assets/profile.jpg";
import { BiSolidUser } from "react-icons/bi";
import { useEffect, useState } from "react";
import { fetchUserProfile } from "../redux/features/profile/profileThunks";
export const user = {
  name: "Toko John Doe",
  avatar: avatar,
};

const Header = ({ role }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.profile);
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setProfileData(data);
    }
  }, [data]);

  return (
    <div className="font-roboto flex justify-end items-center p-4 sticky top-0 bg-slate-100">
      <div className="flex items-center space-x-2 ">
        {role === "admin" ? (
          <>
            <span>Admin</span>
            <div className="w-8 h-8 rounded-full border border-black flex justify-center items-center">
              <BiSolidUser size={20} />
            </div>
          </>
        ) : (
          <>
            <span>{profileData.user_name}</span>
            <img src={profileData.user_img} alt="User Avatar" className="w-8 h-8 rounded-full" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
