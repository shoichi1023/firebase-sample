
const state = {
	in_text:'',
}

const changeTextReducer = (state=state, action) => {
	switch(action.type){
		
		case 'EDIT':
			return{
				...state,
				in_text: action.in_text,
			};

		default:
			return { ...state };
	}
}

export default changeTextReducer