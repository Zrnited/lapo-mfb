// import { NavLink } from "react-router-dom"
import { CardRequest, NavLinks, RequestCardRequests } from "../entities";
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
import manageCard from "../assets/icons/manage-card.png";
import instantCard from "../assets/icons/instant-card.png";
import personalizedCard from "../assets/icons/personalized-card.png";
import reviewCard from "../assets/icons/review-card.png";
import analytics1 from "../assets/icons/analytics-1.png";
import analytics2 from "../assets/icons/analytics-2.png";
import analytics3 from "../assets/icons/analytics-3.png";
import analytics4 from "../assets/icons/analytics-4.png";

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
    icon: cardProfile,
    to: "/dashboard/card-profile",
    iconActive: activeCardProfile,
  },
  {
    title: "card request",
    icon: cardRequest,
    to: "/dashboard/card-request",
    iconActive: activeCardRequest,
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

const quickAccess = [
  {
    title: "manage a card",
    icon: manageCard,
  },
  {
    title: "issue instant card",
    icon: instantCard,
  },
  {
    title: "issue personalized card",
    icon: personalizedCard,
  },
  {
    title: "review card requests",
    icon: reviewCard,
  },
];

const analyticalDatas = [
  {
    title: "total active cards",
    percentage: "+9%",
    value: "26,478",
    icon: analytics1,
    isStats: true,
    period: "this month",
  },
  {
    title: "total personalized cards",
    percentage: "+8.5%",
    value: "15,703",
    icon: analytics2,
    isStats: true,
    period: "this month",
  },
  {
    title: "today's revenue",
    percentage: "+6%",
    value: "₦9.3",
    icon: analytics3,
    isStats: true,
    period: "vs yesterday",
  },
  {
    title: "pending requests",
    percentage: "",
    value: "38",
    icon: analytics4,
    isStats: false,
    period: "",
  },
];

const recentCardRequests: RequestCardRequests[] = [
  {
    branch: "corporate",
    cardType: "instant",
    quantity: 10,
    status: "ready",
  },
  {
    branch: "corporate",
    cardType: "personalized",
    quantity: 10,
    status: "in progress",
  },
  {
    branch: "corporate",
    cardType: "personalized",
    quantity: 10,
    status: "acknowledged",
  },
  {
    branch: "corporate",
    cardType: "instant",
    quantity: 10,
    status: "pending",
  },
];

const cardRequests: CardRequest[] = [
  {
    id: 1,
    branch: "corporate",
    initiatotr: "rootUser",
    quantity: 10,
    batch: "847264905",
    dateRequested: "11/14/2024 10:27:43",
    status: "ready",
  },
  {
    id: 2,
    branch: "corporate",
    initiatotr: "rootUser",
    quantity: 10,
    batch: "847264905",
    dateRequested: "11/14/2024 10:27:43",
    status: "ready",
  },
  {
    id: 3,
    branch: "corporate",
    initiatotr: "rootUser",
    quantity: 10,
    batch: "847264905",
    dateRequested: "11/14/2024 10:27:43",
    status: "in progress",
  },
  {
    id: 4,
    branch: "corporate",
    initiatotr: "rootUser",
    quantity: 10,
    batch: "847264905",
    dateRequested: "11/14/2024 10:27:43",
    status: "pending",
  },
  {
    id: 5,
    branch: "corporate",
    initiatotr: "rootUser",
    quantity: 10,
    batch: "847264905",
    dateRequested: "11/14/2024 10:27:43",
    status: "acknowledged",
  },
];

function hideScrollBar(activity: boolean) {
  if (activity) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}

export {
  navigationLinks,
  quickAccess,
  analyticalDatas,
  recentCardRequests,
  cardRequests,
  hideScrollBar,
};
