export let Event_Name_NewCardSelected = "Event_Name_NewCardSelected";
export let Event_Name_CardDataChange = "Event_Name_CardDataChange";
export let Event_Name_AddNewCard = "Event_Name_AddNewCard";
export let Event_Name_CardListChange = "Event_Name_CardListChange";
export let Event_Name_OnLoad = "Event_Name_OnLoad";

export let Event_Invoke_NewCardSelected = function (newCardName, newCardData) {
  document.dispatchEvent(
    new CustomEvent(Event_Name_NewCardSelected, {
      detail: { cardName: newCardName, cardData: newCardData },
    })
  );
};

export let Event_Invoke_CardDataChange = function (newCardName, newCardData) {
  document.dispatchEvent(
    new CustomEvent(Event_Name_CardDataChange, {
      detail: { cardName: newCardName, cardData: newCardData },
    })
  );
};

export let Event_Invoke_AddNewCard = function (newCardName, newCardData) {
  document.dispatchEvent(
    new CustomEvent(Event_Name_AddNewCard, {
      detail: { cardName: newCardName, cardData: newCardData },
    })
  );
};

export let Event_Invoke_CardListChange = function (newCardList) {
  document.dispatchEvent(
    new CustomEvent(Event_Name_CardListChange, {
      detail: { cardList: newCardList },
    })
  );
};

export let Event_Invoke_OnLoad = function (newData) {
  document.dispatchEvent(
    new CustomEvent(Event_Name_OnLoad, {
      detail: { data: newData },
    })
  );
};