import Increment  from "./Increment";
import Decrement from "./Decrement";
import { combineReducers } from "redux";

const CombineReducers = combineReducers({
   increment:  Increment,
    decrement : Decrement
})    

export default CombineReducers;