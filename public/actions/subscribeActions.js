import * as types from './actionTypes';

export function dayChange (checkValue, day) {
    return {
        type: types.DATE_CLICK,
        checkValue, 
        name,
        date
    };
}

export function genderChange (gender) {
    return {
        type: types.GENDER_SELECT,
        gender
    };
}

export function shirtSizeChange (size) {
    return {
        type: types.SHIRT_SELECT,
        size
    };
}

export function pantSizeChange (size) {
    return {
        type: types.PANT_SELECT,
        size
    };
}

export function commentChange (text) {
    return {
        type: types.COMMENT_CHANGE,
        text
    };
}

export function giftLevelChange (level) {
    return {
        type: types.GIFT_LEVEL_CHANGE,
        level
    };
}