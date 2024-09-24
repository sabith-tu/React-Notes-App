import { useState } from "react";
import {
  Event_Invoke_AddNewCard,
  Event_Invoke_CardListChange,
} from "./event-system";
import { AddNewCard, data, SaveData } from "./data";

export function Header() {
  const [text, setText] = useState("");
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
          onClick={OnNewCardAdded}>
          {" "}
          +
        </button>
      </div>
    </div>
  );

  function OnTextChange(e) {
    setText(e.target.value);
  }

  function OnNewCardAdded() {
    if (text == "") {
      return;
    }
    AddNewCard(text, "");
    setText("");
  }
}
