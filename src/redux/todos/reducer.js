import { initialState } from "./initialState";
import {
	ADD,
	DELETE,
	TOGGLE,
	SELECT_COLOR,
	COMPLETE_ALL,
	CLEAR_COMPLETE,
} from "./actionTypes";

const nextTodoId = (todos) => {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
	return maxId + 1;
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return [
				...state,
				{
					id: nextTodoId(state),
				},
      ];
    
		case TOGGLE:
			return state.map((todo) => {
				if (todo.id !== action.payload) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed,
				};
      });
    
		case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    
		case SELECT_COLOR:
			return state.map((todo) => {
				if (todo.id !== action.payload.todoId) {
					return todo;
				}
				return {
					...todo,
					color: action.payload.color,
				};
      });
    
    case COMPLETE_ALL: 
      return state.map(todo => {
        return {
          ...todo,
          completed: true
        }
      })
    case CLEAR_COMPLETE: 
      return state.filter(todo => !todo.completed)

		default:
			return state;
	}
};

export default reducer;