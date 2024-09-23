import { useEffect, useState } from "react";
import {
  Event_Name_NewCardSelected,
  Event_Invoke_CardDataChange,
  Event_Name_CardDataChange,
} from "./event-system";

export function BodyRightSection() {
  const [cardData, setCardData] = useState("");
  const [cardName, setCardName] = useState("");
  useEffect(() => {
    document.addEventListener(Event_Name_NewCardSelected, (e) => {
        setCardName(e.detail.cardName);
      setCardData(e.detail.cardData);
    });
    document.addEventListener(Event_Name_CardDataChange, (e) => {
      setCardName(e.detail.cardName);
      setCardData(e.detail.cardData);
    });
  }, []);
  {
    if (cardName != "")
      return (
        <textarea
          onChange={HandleTextAreaOnChange}
          value={cardData}
          className="bg-c-1 w-full h-full overflow-auto p-5 custom-scrollbar-1 focus:outline-none focus:border-transparent resize-none "
        />
      );
    else return <div className="flex-center w-full h-full"> Select Card </div>;
  }

  function HandleTextAreaOnChange(event) {
    const newText = event.target.value;
    //setCardData(newText);
    Event_Invoke_CardDataChange(cardName, newText);
  }
}
