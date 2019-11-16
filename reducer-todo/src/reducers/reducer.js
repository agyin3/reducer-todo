export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK': 
            return [...state, {item: action.payload, completed: false, id: Date()}]
        case 'TOGGLE_COMPLETE':
            return state
        default: 
            return state
    }
}

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },

    {
        item: 'Watch Lakers game',
        completed: false,
        id: 3892987590
    },

    {
        item: 'Do Laundry',
        completed: false,
        id: 3892987591
    }
]