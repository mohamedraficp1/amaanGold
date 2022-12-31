export function CommodityPriceReducer(
    state = {
        gold : {},
        silver : {},
        goldLive: 0,
    }, action) {
    switch (action.type) {
        case "GOLD_DATA":
            return { ...state, gold: action.payload }
        case "SILVER_DATA":
            return { ...state, silver: action.payload }
        case "GOLD_LIVE" :
            return {...state, goldLive: action.payload}
        case "SILVER_LIVE" :
            return {...state, silverLive: action.payload}
        
        default:
            return state;
    }
}