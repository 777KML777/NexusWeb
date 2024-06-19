import {
  faChevronDown,
    faChevronUp,
    faHandMiddleFinger,
    faTicket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ItemHistory({ text, date, colorIcon, point, border }) {
  return (
    <>
      <div
        className={`
                border-gray 
                ${border}
                mx-4
                mt-2
            `}
      >
        <Link
          href={"/notifications"}
          className="flex items-center justify-between"
        >
          <div>
            <p>{text}</p>
            <p className="text-sm text-gray-400">{date}</p>
          </div>

          <div className="flex">
            <p className={`${colorIcon}`}>{point}</p>
            <FontAwesomeIcon
              className={`px-2 text-2xl ${colorIcon}`}
              icon={colorIcon == 'text-green-500' ?faChevronUp 
                : (colorIcon == 'text-red-500') ? faChevronDown : faTicket}
            />
          </div>
        </Link>
      </div>
    </>
  );
}
