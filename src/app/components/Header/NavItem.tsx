import { useEffect, useRef, useState } from "react";

import { ChevronIcon } from "../icons/ChevronIcon";
import { SubNav } from "./SubNav";
import { NavItemProps, NavSubItem } from "./types";

const ITEM_CLASS_NAME =
  "px-4 py-[31px] w-full h-full border border-dashed border-primary1 focus:border-error2 hover:opacity-70 transition-opacity duration-200 ease-in-out";

const ExpandableItem = ({
  label,
  items,
}: {
  items: NavSubItem[];
  label: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded(!expanded);

  useEffect(() => {
    // handles closing of subnav when clicking outside of it
    if (ref.current) {
      ["click", "touchstart"].forEach((type) =>
        document.addEventListener(type, ({ target }) => {
          if (ref.current && !ref.current.contains(target as Node)) {
            setExpanded(false);
          }
        })
      );
    }
  }, [ref]);

  return (
    <div ref={ref}>
      <button
        className={`flex items-center ${ITEM_CLASS_NAME}`}
        onClick={toggle}
        title={label}
        type="button"
      >
        <span className="relative mr-4">{label}</span>
        <ChevronIcon className="rotate-90" />
      </button>
      <SubNav expanded={expanded} items={items} />
    </div>
  );
};

export const NavItem = ({ content, label, items, href }: NavItemProps) => (
  <li
    aria-controls="main-menu"
    aria-haspopup={!!items?.length}
    className="relative leading-6 pretto-nav-item"
    role="menuitem"
    tabIndex={-1}
  >
    {items?.length ? (
      <ExpandableItem items={items} label={label} />
    ) : (
      <a className={`block ${ITEM_CLASS_NAME}`} href={href} title={label}>
        {content ?? <span className="relative">{label}</span>}
      </a>
    )}
  </li>
);
