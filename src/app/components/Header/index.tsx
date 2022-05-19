import { NAV_ITEMS } from "../constants";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { NavItem } from "./NavItem";

export const Header = () => (
  <header className="flex sticky inset-x-0 top-0 z-header justify-end items-center px-5 bg-primary1 shadow">
    <nav>
      <ul
        className="hidden space-x-4 sm:flex"
        id="main-menu"
        role="menubar"
        tabIndex={0}
      >
        {NAV_ITEMS.map(({ content, label, href, items }) => (
          <NavItem
            key={label}
            content={content}
            href={href}
            items={items}
            label={label}
          />
        ))}
      </ul>
    </nav>
    <button aria-label="menu" className="py-[30px] sm:hidden" type="button">
      <HamburgerIcon />
    </button>
  </header>
);
