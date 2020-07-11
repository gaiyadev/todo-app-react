import * as actionType from '../store/action';

const initialState = {
    items: [],
    currentItem: {
        text: '',
        id: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action) {
        case actionType.ADD_ITEM:
            return {
                
            }

        default:
            break;
    }
    return state;
};

export default reducer;