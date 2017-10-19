import valid from 'card-validator';
import {
    VALID_CARD_TYPES,
    INCORRECT_FORMAT,
    INCORRECT_LENGTH,
    INCORRECT_TYPE,
    EMPTY_FIELD,
} from '../constants';

function validateCardType(value) {
    const card = getCardInfo(value);
    return (card && VALID_CARD_TYPES.includes(card.type)) ? '' : INCORRECT_TYPE;
}

function validateCardLength(value) {
    return (value.length === 16) ? '' : INCORRECT_LENGTH;
}

function validateEmptyField(value) {
    return value.length ? '' : EMPTY_FIELD;
}

export function validateCard(value) {
    return validateEmptyField(value) ||
        validateCardType(value) ||
        validateCardLength(value);
}

export function getCardInfo(value) {
    return valid.number(value).card;
}
