import Home from "../screens/Home";
import Post from "../screens/Post";
import Profile from "../screens/Profile";
import Chat from "../screens/Chat";
import { ImageSourcePropType } from "react-native";

interface TabOption {
  name: string;
  component: React.FC;
  inactiveIcon: ImageSourcePropType;
  activeIcon: ImageSourcePropType;
}

const TabOptions: TabOption[] = [
  {
    name: "홈",
    component: Home,
    inactiveIcon: require("../../assets/icon/icon-home.png"),
    activeIcon: require("../../assets/icon/icon-home-fill.png"),
  },
  {
    name: "채팅",
    component: Chat,
    inactiveIcon: require("../../assets/icon/icon-message-circle.png"),
    activeIcon: require("../../assets/icon/icon-message-circle-fill.png"),
  },
  {
    name: "게시물 작성",
    component: Post,
    inactiveIcon: require("../../assets/icon/icon-edit.png"),
    activeIcon: require("../../assets/icon/icon-edit.png"),
  },
  {
    name: "프로필",
    component: Profile,
    inactiveIcon: require("../../assets/icon/icon-user.png"),
    activeIcon: require("../../assets/icon/icon-profile.png"),
  },
];

export default TabOptions;
