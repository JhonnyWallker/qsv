import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faHand, faBars } from "@fortawesome/free-solid-svg-icons";

function MovilNav() {
  return (
    <div className="flex justify-between bg-slate-200">
      <div className="w-8 m-2 text-slate-400 hover:text-slate-300">
        <FontAwesomeIcon icon={faBars} className="transform scale-x-[-1]" />
      </div>
      <div className="w-10 m-1 text-slate-300 hover:text-slate-500">
        <FontAwesomeIcon icon={faCircle} />
      </div>
      <div className="w-8 m-2 text-slate-400 hover:text-slate-300">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default MovilNav;
