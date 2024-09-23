import { useState } from "react";
import { Event_Invoke_AddNewCard, Event_Invoke_CardListChange } from "./event-system";
import { data } from "./data";

export function Header() {
  const [text, setText] = useState("");
  const [cards, setCards] = useState(data);
  return (
    <div className="w-full h-16 pt-2 pb-2">
      <div className="rounded-xl h-full w-full bg-c-2 flex">
        <input
          onChange={OnTextChange}
          value={text}
          type="text"
          className="w-full bg-c-2 focus:border-0 rounded-xl pl-4"
        />
        <button
          className="w-10 h-10 mt-auto mb-auto flex-center ml-3 mr-3"
          onClick={OnNewCardAdded}> +
        </button>
      </div>
    </div>
  );

  function OnTextChange(e) {
    setText(e.target.value);
  }

  function OnNewCardAdded() {
    if (text === "") {
      return;
    }
    // data.push({
    //   "name": text,
    //   "note": "",
    // });

    /* the data list is not a state so it won't re-render any change.Also Event dispatching occurs
     before the updation happens. Here we are calling the Event only after the state has been changed.
     */
    const newCard = {"name": text, "note": ""}
    const updatedCards = [...cards, newCard]

    setCards(updatedCards)
    console.log("newData: ", updatedCards)
    Event_Invoke_CardListChange(updatedCards);
    setText("");
  }
}
