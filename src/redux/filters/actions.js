import { CHANGE_STATUS, CHANGE_COLOR } from "./actionTypes";

export const changeColor = (color, changeType) => {
	return {
		type: CHANGE_COLOR,
		payload: {
			color,
			changeType,
		},
	};
};

export const changeStatus = (status) => {
	return {
		type: CHANGE_STATUS,
		payload: status,
	};
};
