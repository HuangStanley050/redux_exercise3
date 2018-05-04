import * as actionTypes from "./actions.js";

const initialState = {
    course1: false,
    course2: false,
    course3: false,
    course4: false,
    c1_price: 200,
    c2_price: 400,
    c3_price: 100,
    c4_price: 60,
    total: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.C1) {
        //console.log(state);
        return {
            ...state,
            course1: !state.course1
        };

    }

    if (action.type === actionTypes.C2) {
        //console.log(state);
        return {
            ...state,
            course2: !state.course2
        };

    }

    if (action.type === actionTypes.C3) {
        //console.log(state);
        return {
            ...state,
            course3: !state.course3
        };

    }

    if (action.type === actionTypes.C4) {
        //console.log(state);



        return {
            ...state,
            course4: !state.course4
        };

    }
    if (action.type === actionTypes.CALC) {
        var price = 0;

        if (state.course1) {
            price += state.c1_price;
        }
        if (state.course2) {
            price += state.c2_price;
        }
        if (state.course3) {
            price += state.c3_price;
        }
        if (state.course4) {
            price += state.c4_price;
        }

        //console.log("The total is: " + price);

        return {
            ...state,
            total: price
        };
    }
    return state;
};




export default reducer;
