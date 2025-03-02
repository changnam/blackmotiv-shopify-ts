'use client'
import {useReducer} from 'react'
type State = {count: number};
type Action = {type: 'increment' | 'decrement' };

function reducer(state: State, action: Action): State {
	 switch (action.type) {
		case 'increment':
			return {count: state.count + 1};
		case 'decrement':
			return {count: state.count -1};
		default:
			console.log('Unknown action type');
            return state;
	}
}

export default function Counter(){
	const [state, dispatch] = useReducer(reducer,{count: 0});
	
	return (
		<div>
			<button onClick={() => dispatch({type: 'decrement'})}>-</button>
			<span>{state.count}</span>
			<button onClick={() => dispatch({type: 'increment'})}>+</button>
		</div>
	);
}
