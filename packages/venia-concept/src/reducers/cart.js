import { handleActions } from 'redux-actions';

import actions from 'src/actions/cart';
import checkoutActions from 'src/actions/checkout';

export const name = 'cart';

const initialState = {
    details: {},
    guestCartId: null,
    totals: {}
};

const reducerMap = {
    [actions.receiveGuestCart]: (state, { payload }) => {
        return {
            ...state,
            guestCartId: payload
        };
    },
    [actions.updateDetails]: (state, { payload, error }) => {
        if (error) {
            return state;
        }

        return {
            ...state,
            ...payload
        };
    },
    [checkoutActions.acceptOrder]: () => {
        return initialState;
    }
};

export default handleActions(reducerMap, initialState);
