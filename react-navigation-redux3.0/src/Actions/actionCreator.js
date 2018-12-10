import { incrementCounter, decrementCounter,asyncdecrementCounter } from "./actionTypes";
import {Alert} from 'react-native'
function incrementAction(){
	return {
	  type: incrementCounter
	}
};
function decrementAction(){
	return {
	  type: decrementCounter
	}
};
function asyncdecrementAction(){
	return dispatch=>{
		setTimeout(()=>{
			dispatch({type: asyncdecrementCounter})
		},2000)
	  
	}
};


export { incrementAction, decrementAction, asyncdecrementAction};
