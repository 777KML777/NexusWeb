import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ItemNofification({ text, colorIcon, colorSeconIcon}) {
  return (
    <>
      <div
        className={`
                    border-gray
                    px-4
                    border-b-2
                    mt-2
                `}
      >
        <Link href={"/notifications"} className="flex items-center justify-between">
          <div>
            <p>{text}</p>
          </div>

          <div className="flex">
            <FontAwesomeIcon className={`px-2 text-2xl ${colorIcon}`} icon={faEnvelope} />
            <FontAwesomeIcon className={`px-2 text-2xl ${colorSeconIcon}`} icon={faMobile} />
          </div>
        </Link>
      </div>
    </>
  );
}
