import avatar from "../assets/profile.jpg";

const user = {
  name: "Toko John Doe",
  avatar: avatar, // URL foto profil
};

const Header = () => {
  return (
    <div className="font-roboto flex justify-end items-center p-4 ">
      <div className="flex items-center space-x-2">
        <span>{user.name}</span>
        <img src={user.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
