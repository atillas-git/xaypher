import { CgFeed } from "react-icons/cg";
import { MdGrid3X3, MdNotifications } from "react-icons/md";
import {
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { ImMakeGroup } from "react-icons/im";

interface ISidebarItem {
  label: string;
  to?: string;
  key: string;
  icon: React.ReactNode;
}

const sidebarConfig: ISidebarItem[] = [
  {
    label: "Feed",
    to: "/feed",
    key: "sidebar_feed",
    icon: <CgFeed className="text-2xl" />,
  },
  {
    label: "Explore",
    to: "/explore",
    key: "sidebar_explore",
    icon: <MdGrid3X3 className="text-2xl" />,
  },
  {
    label: "Communities",
    to: "/communities",
    key: "sidebar_communities",
    icon: <ImMakeGroup className="text-2xl" />,
  },
  {
    label: "Notifications",
    key: "sidebar_notifications",
    icon: <MdNotifications className="text-2xl" />,
  },
  {
    label: "Messages",
    to: "/messages",
    key: "sidebar_messages",
    icon: <AiOutlineMessage className="text-2xl" />,
  },
  {
    label: "Profile",
    to: "/profile",
    key: "sidebar_profile",
    icon: <AiOutlineUser className="text-2xl" />,
  },
  {
    label: "Settings",
    to: "/settings",
    key: "sidebar_settings",
    icon: <AiOutlineSetting className="text-2xl" />,
  },
];

export default sidebarConfig;
