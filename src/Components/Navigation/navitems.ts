import { MdDashboard ,MdOutlineStarPurple500} from "react-icons/md";
import FileIcon from "../../assets/folder-double-icon.svg"
import FileReqIcon from "../../assets/folder-share-icon.svg"
import ShareIcon from "../../assets/share-icon.svg"
import DeleteIcon from "../../assets/delete-icon.svg"

export const navItems = [
    { id: 1, path: "dashboard", title: "Home", icon: MdDashboard },
    { id: 2, path: "file", title: "My Files", icon: FileIcon },
    { id: 3, path: "#", title: "Starred", icon: MdOutlineStarPurple500 },
    { id: 4, path: "#", title: "Files Requests", icon: FileReqIcon },
    { id: 5, path: "#", title: "Shared", icon: ShareIcon },
    { id: 6, path: "#", title: "Deleted", icon: DeleteIcon },
]