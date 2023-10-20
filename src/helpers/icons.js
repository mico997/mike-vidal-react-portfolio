import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSquareMinus,
  faSpinner,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSquareMinus,
    faSpinner,
    faCirclePlus
  );
};

export default Icons;
