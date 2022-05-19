import { ReactChild } from "react";

export interface NavSubItem {
  content?: ReactChild;
  href: string;
  label: string;
}

export interface NavItemProps extends Omit<NavSubItem, "href"> {
  href?: string;
  items?: NavSubItem[];
}
