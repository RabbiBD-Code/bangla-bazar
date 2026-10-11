
import Image from "next/image";
import Link from "next/link";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="container mx-auto mt-3">
      <div className="flex justify-between items-center gap-4">
        <Link href={'/'}>
        <div className="flex items-center gap-4">
          <Image
            className="bg-green-700 rounded-xl p-2 text-white"
            height={40}
            width={40}
            alt="logo"
            src="/logo-icon.png"
          />

          <div>
            <h2 className="text-2xl font-bold">বাজার দর</h2>

            <div>{date}</div>
          </div>
        </div>
        </Link>
        <UserInfo/>
      </div>
    </div>
  );
};

export default Header;
