import { IconType } from "react-icons";

export enum LayoutEnum {
  Admin = "Admin",
  Teacher = "Teacher",
  Student = "Student",
}

export interface ILayoutContext {
  layout: LayoutEnum;
  setLayout: (layout: LayoutEnum) => void;
}

export interface INavLink {
  title: string;
  path: string;
  icon: IconType;
  onClick?: () => void;
}
