import {
    faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ItemHistory({ text, date, colorIcon, point }) {
  return (
    <>
      <div
        className={`
                border-gray 
                border-b-2
                px-4
                mt-2
            `}
      >
        <Link
          href={"/notifications"}
          className="flex items-center justify-between"
        >
          <div>
            <p>{text}</p>
            <p className="text-gray-500">{date}</p>
          </div>

          <div className="flex">
            <p className={`${colorIcon}`}>{point}</p>
            <FontAwesomeIcon
              className={`px-2 text-2xl ${colorIcon}`}
              icon={faChevronUp}
            />
          </div>
        </Link>
      </div>
    </>
  );
}
