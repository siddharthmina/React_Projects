import { FaUserAltSlash } from "react-icons/fa";

const NotFoundContact = () => {
  return (
    <div className="flex flex-col h-[80vh] items-center justify-center gap-4">
      <div>
      <FaUserAltSlash className="text-7xl"/>
      </div>
      <h3 className="text-2xl font-semibold text-black"> No User Found </h3>
    </div>
  );
};

export default NotFoundContact;

