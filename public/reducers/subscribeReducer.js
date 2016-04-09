import * as types from '../actions/actionTypes';

const initialState = {
    name: {},
    dates: []
};

const subscribeReducer = function (state = initialState, action) {

    switch (action.type) {
        case types.DATE_CLICK: 
            return checkValue ? state.dates.concat({name: action.name, date: action.date}) : state.dates.filter(date => date.name !== action.name && date.dates !== action.date);
        case types.GENDER_SELECT:
            return ;
        case types.SHIRT_SELECT:
            return ;
        case types.PANT_SELECT:
            return ;
        case: types.COMMENT_CHANGE:
            return ;
        case: types.GIFT_LEVEL_CHANGE:
            return ;

    }

    return state;
}