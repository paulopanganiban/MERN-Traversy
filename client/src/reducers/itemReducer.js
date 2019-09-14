import uuid from 'uuid';
import { GET_ITEMS} from '../actions/types';
// , ADD_ITEM, DELETE_ITEM 
const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' },
    ]
};
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return { 
                // we return the state
                ...state
            }
            default:
                return state;
    }
}