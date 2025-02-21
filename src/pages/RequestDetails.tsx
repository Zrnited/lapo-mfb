/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CardRequest } from "../entities";

export default function RequestDetails() {
  //checks if card exists
  const [displayPage] = useState(() => {
    return sessionStorage.getItem("cardRequest") ? true : false;
  });

  const [cardObject, setCardObject] = useState<CardRequest>();

  //gets and stores object in a state
  async function getObjectItem() {
    const requestItem = sessionStorage.getItem("cardRequest");
    if (requestItem) {
      setCardObject(JSON.parse(requestItem));
    }
  }

  useEffect(() => {
    getObjectItem();
    console.log(cardObject);
  }, []);

  if (!displayPage) return <h1>Card details not found.</h1>;

  return <main>Here, welcome to request details.</main>;
}
