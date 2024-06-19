import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ItemNofification({ text, colorIcon, colorSeconIcon, border}) {
  return (
    <>
      <div
        className={`
                    border-gray
                    mx-4
                    ${border}
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
