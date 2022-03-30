import { NAV_ITEMS } from "../constants";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { NavItem } from "./NavItem";

export const Header = () => (
  <header className="flex items-center justify-end sticky z-header shadow top-0 inset-x-0 bg-primary1 px-5">
    <nav>
      <ul className="hidden sm:flex space-x-4">
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
    <button aria-label="menu" className="sm:hidden py-[30px]" type="button">
      <HamburgerIcon />
    </button>
  </header>
);
