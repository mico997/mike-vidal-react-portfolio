import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSquareMinus,
  faSpinner,
  faCirclePlus,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSquareMinus,
    faSpinner,
    faCirclePlus,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock
  );
};

export default Icons;
