import { useEffect, useState } from "react";
import { DataCard } from "./data-card";
import {
  Event_Invoke_NewCardSelected,
  Event_Name_CardListChange,
} from "./event-system";

export function BodyLeftPanel() {
  let [cardsToShow, setCardsToShow] = useState([]);

  useEffect(() => {
    document.addEventListener(Event_Name_CardListChange, (e) => {
      console.log(e.detail.cardList);
      setCardsToShow(e.detail.cardList);
    });
  }, []);

  console.log("Rerunning");
  return (
    <div className="bg-c-2 overflow-auto w-72 rounded-xl h-full flex flex-col space-y-2 p-2 custom-scrollbar-2">
      {cardsToShow.map((item) => {
        
        console.log("Inside Loop , item: " + item);
        return (
          <DataCard
            key={item.name}
            cardName={item.name}
            onClick={() => {
              Event_Invoke_NewCardSelected(item.name, item.note);
            }}
          />
        );
      })}
    </div>
  );
}
