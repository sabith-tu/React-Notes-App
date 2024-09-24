import { DeleteCard } from "./data";

export function DataCard(props) {
  console.log("DataCard Called");

  return (
    <div
      onClick={props.onClick}
      className="cursor-pointer p-3 min-h-10 h-10 bg-c-3  w-full rounded-xl flex-center">
      {props.cardName}
      <div className="ml-auto space-x-2">
        <button onClick={OnClickBUtton_Delete}>❌</button>
        {/* <button onClick={OnClickSettingsButton} >✏️</button> */}
      </div>
    </div>
  );

  function OnClickBUtton_Delete() {
    if (confirm("Delete note " + props.cardName)) {
      DeleteCard(props.cardName);
    }
  }
  function OnClickBUtton_Rename() {}
}
