const user = {
  name: "John Doe",
  avatar: "https://example.com/avatar.jpg", // URL foto profil
};

const Header = () => {
  return (
    <div className="flex justify-end items-center p-4 ">
      <div className="flex items-center space-x-2">
        <img src={user.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
        <span className="text-white">{user.name}</span>
      </div>
    </div>
  );
};

export default Header;
