import { Event_Invoke_OnLoad } from "./event-system";
import {
  Event_Invoke_CardDataChange,
  Event_Invoke_CardListChange,
} from "./event-system";

export let data = [];

const LocalStorage_Key_Notes = "LocalStorage_Key_Notes";

export function AddNewCard(cardName, cardNote) {
  data.push({
    name: cardName,
    note: cardNote,
  });
  Event_Invoke_CardListChange(data);
  SaveData();
}

export function DeleteCard(cardName) {
  data = data.filter((item) => item.name !== cardName);
  Event_Invoke_CardListChange(data);
  SaveData();
}

export function CardNoteChange(cardName, cardNote) {
  data.find((item) => item.name === cardName).note = cardNote;
  Event_Invoke_CardDataChange(cardName, cardNote);
  SaveData();
}

export function SaveData() {
  localStorage.setItem(LocalStorage_Key_Notes, JSON.stringify(data));
}

export function LoadData() {
  const loadedNotes = localStorage.getItem(LocalStorage_Key_Notes);
  data = loadedNotes ? JSON.parse(loadedNotes) : [];
  Event_Invoke_OnLoad(data);
}
