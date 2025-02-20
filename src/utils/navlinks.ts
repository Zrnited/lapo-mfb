// import { NavLink } from "react-router-dom"
import { NavLinks } from "../entities";
import branches from "../assets/icons/branches.png";
import roles from "../assets/icons/roles.png";
import users from "../assets/icons/users.png";
import cardScheme from "../assets/icons/card-scheme.png";
import cardProfile from "../assets/icons/card-profile.png";
import activeCardProfile from "../assets/icons/card-profile-active.png";
import cardRequest from "../assets/icons/card-request.png";
import activeCardRequest from "../assets/icons/card-request-active.png";
import stock from "../assets/icons/stock.png";
import cards from "../assets/icons/cards.png";
import authList from "../assets/icons/auth-list.png";
import authQueue from "../assets/icons/auth-queue.png";
import trail from "../assets/icons/trail.png";
import account from "../assets/icons/account.png";

const navigationLinks: NavLinks[] = [
  {
    title: "branches",
    icon: branches,
    to: "/dashboard/branches",
  },
  {
    title: "roles",
    icon: roles,
    to: "/dashboard/roles",
  },
  {
    title: "users",
    icon: users,
    to: "/dashboard/users",
  },
  {
    title: "card scheme",
    icon: cardScheme,
    to: "/dashboard/card-scheme",
  },
  {
    title: "card profile",
    icon:  cardProfile,
    to: "/dashboard/card-profile",
    iconActive: activeCardProfile,
  },
  {
    title: "card request",
    icon: cardRequest,
    to: "/dashboard/card-request",
    iconActive: activeCardRequest
  },
  {
    title: "stock",
    icon: stock,
    to: "/dashboard/stock",
  },
  {
    title: "cards",
    icon: cards,
    to: "/dashboard/cards",
  },
  {
    title: "authorization list",
    icon: authList,
    to: "/dashboard/auth-list",
  },
  {
    title: "authorization queue",
    icon: authQueue,
    to: "/dashboard/auth-queue",
  },
  {
    title: "trail",
    icon: trail,
    to: "/dashboard/trail",
  },
  {
    title: "account",
    icon: account,
    to: "/dashboard/account",
  },
];

export {navigationLinks}
