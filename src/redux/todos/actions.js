import {
	ADD,
	DELETE,
	TOGGLE,
	SELECT_COLOR,
	COMPLETE_ALL,
	CLEAR_COMPLETE,
} from "./actionTypes";

export const add = (todoText) => {
	return {
		type: ADD,
		payload: todoText,
	};
};

export const toggle = (todoId) => {
	return {
		type: TOGGLE,
    payload: todoId
	};
};

export const deleteOne = (todoId) => {
	return {
		type: DELETE,
		payload: todoId,
	};
};

export const selectColor = (todoId, color) => {
	return {
		type: SELECT_COLOR,
		payload: {
			todoId,
			color,
		},
	};
};

export const completeAll = () => {
	return {
		type: COMPLETE_ALL,
	};
};

export const clearComplete = () => {
	return {
		type: CLEAR_COMPLETE,
	};
};
