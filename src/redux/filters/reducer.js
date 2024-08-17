import initialState from "./initialState";
import { CHANGE_STATUS, CHANGE_COLOR } from "./actionTypes";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_STATUS:
			return {
				...state,
				status: action.payload,
			};

		case CHANGE_COLOR:
			const { color, changeType } = action.payload;
			switch (changeType) {
				case "add":
					return {
						...state,
						colors: [...state.colors, color],
					};
				case "remove":
					return {
						...state,
						colors: state.colors.filter(
							(existingColor) => existingColor !== color
						),
					};

				default:
					return state;
			}

		default:
			return state;
	}
};

export default reducer;