import { CSSProperties } from "react";
import { Transition, TransitionStatus } from "react-transition-group";

import { NavSubItem } from "./types";

const TRANSITION_DURATION = 150;
const TRANSITION_STYLES: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, visibility: "hidden" },
  unmounted: {},
};

export const SubNav = ({
  expanded,
  items,
}: {
  expanded: boolean;
  items: NavSubItem[];
}) => (
  <Transition in={expanded} timeout={TRANSITION_DURATION}>
    {(state) => (
      <ul
        className={`fixed ml-4 -mt-6 py-2 z-10 shadow bg-white rounded-lg text-neutral1 transition-opacity duration-${TRANSITION_DURATION}`}
        style={{ ...TRANSITION_STYLES[state] }}
      >
        {items.map(({ content, label, href }) => (
          <li key={label}>
            <a
              className="block px-4 py-2 hover:bg-neutral4"
              href={href}
              title={label}
            >
              {content ?? label}
            </a>
          </li>
        ))}
      </ul>
    )}
  </Transition>
);
