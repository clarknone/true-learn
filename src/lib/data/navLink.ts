import { LuLayoutDashboard } from "react-icons/lu";
import { INavLink, LayoutEnum } from "../interface/layout";
import { FaUpDownLeftRight } from "react-icons/fa6";

export const NAV_LINKS: { [key in LayoutEnum]: INavLink[] } = {
  [LayoutEnum.Admin]: [
    { title: "Dashboard", icon: LuLayoutDashboard, path: "/admin" },
    { title: "Category", path: "/admin/categories", icon: FaUpDownLeftRight },
  ],
  [LayoutEnum.Student]: [
    { title: "Dashboard", icon: LuLayoutDashboard, path: "/student" },
    { title: "Course", path: "/student/courses", icon: FaUpDownLeftRight },
  ],
  [LayoutEnum.Teacher]: [
    { title: "Dashboard", icon: LuLayoutDashboard, path: "/teacher" },
    { title: "Course", path: "/teacher/courses", icon: FaUpDownLeftRight },
  ],
};
