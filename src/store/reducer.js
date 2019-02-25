const initialState = {
    itemlist  : [
        {listvalue : "Item List 1"},
        {listvalue : "Item List 2"},
        {listvalue : "Item List 3"}
      ]
}

const reducer = (state = initialState, action) => {
    const newState = {...state};
    const itemlist = Object.assign([], state.itemlist);
    if (action.type === "ADD_ITEM") {
        return {
            ...state,
            itemlist : state.itemlist.concat({listvalue:"Item list " + (itemlist.length + 1)})
        }
    }
    if (action.type === "DEL_ITEM") {
        itemlist.splice(action.key, 1);
        return {
            ...state,
            itemlist : itemlist
        }
    }
    return newState;
}

export default reducer;