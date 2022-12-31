import {combineReducers} from 'redux';
import { CommodityPriceReducer } from './commodityData/CommodityPriceReducers';
import { UserReducer } from './commodityData/UserReducer';
import { ReminderDataReducer } from './reminderData/ReminderDataReducer';


const rootReducer = combineReducers({
    data: CommodityPriceReducer,
    user: UserReducer,
    reminder:ReminderDataReducer,
  });
  
  export default rootReducer