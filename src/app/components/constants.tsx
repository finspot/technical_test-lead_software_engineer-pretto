import { NavItemProps } from "./Header/types";
import { CheckmarkIcon } from "./icons/CheckmarkIcon";
import { UserIcon } from "./icons/UserIcon";

/**
 * content of each of the cards
 */
export const CARDS = [
  {
    content:
      "Découvrez les taux du moment en fonction de votre profil d'acheteur et de votre durée d'emprunt. Une vision complète du marché.",
    headline: "dans l'oeil du datalab",
    title: "Le baromètre des taux",
  },
  {
    content:
      "Mensualités, taux d'endettement, frais de remboursement ou de notaire etc. Anticipez-les grâce à nos différentes calculettes.",
    headline: "instantané",
    title: "Les calculettes",
  },
  {
    content:
      "Tableau d'amortissement, check lists et lettres types, tous les documents dont vous avez besoin durant votre achat.",
    headline: "prêt à l'emploi",
    title: "Documents pratiques",
  },
];

/**
 * navbar content
 */
export const NAV_ITEMS: NavItemProps[] = [
  { label: "Taux immobilier", href: "#" },
  {
    label: "En savoir plus",
    items: [
      { label: "Comment ça marche ?", href: "#" },
      { label: "Notre équipe", href: "#" },
      {
        content: (
          <span className="flex items-center text-primary1">
            <span className="mr-2">Pretto dans la presse</span>{" "}
            <CheckmarkIcon />
          </span>
        ),
        label: "Pretto dans la presse",
        href: "#",
      },
    ],
  },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
  { content: <UserIcon />, label: "Account", href: "#" },
];
