export function ReminderDataReducer(
    state={
        reminders:[]
    },action){
        switch(action.type){
case "REMINDER_ADDED":
    return{reminders:[...state.reminders,action.payload]}
        
        default:
            return state
        }
    }