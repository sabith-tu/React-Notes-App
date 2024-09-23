export function DataCard(props) {
    console.log("DataCard Called");
    
  return (
    <div
      onClick={props.onClick}
      className="cursor-pointer min-h-10 h-10 bg-c-3  w-full rounded-xl flex-center">
      {props.cardName}
    </div>
  );
}
