import * as types from '../actions/actionTypes';

const initialState = {
    name: {},
    dates: []
};

const subscribeReducer = function (state = initialState, action) {

    console.log('>>>In the subscribe reducer');

    switch (action.type) {
        case types.DATE_CLICK: 
            return checkValue ? state.dates.concat({name: action.name, date: action.date}) : state.dates.filter(date => date.name !== action.name && date.dates !== action.date);
        case types.GENDER_SELECT:
            return Object.assign({}, state, {gender: action.gender});
        case types.SHIRT_SELECT:
            return Object.assign({}, state, {shirtSize: action.size});
        case types.PANT_SELECT:
            return Object.assign({}, state, {pantSize: action.size});
        case types.COMMENT_CHANGE:
            return Object.assign({}, state, {comments: action.text});
        case types.GIFT_LEVEL_CHANGE:
            return Object.assign({}, state, {giftLevel: action.giftLevel});
    }

    return state;
}

export default subscribeReducer;