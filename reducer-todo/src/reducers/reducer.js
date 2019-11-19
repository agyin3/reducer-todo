export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK': 
            return [...state, {item: action.payload, completed: false, id: Date(), tag:''}]
        case 'TOGGLE_COMPLETE':
            return state.map((todo) => {
                console.log('actionID:' + action.payload)
                if(todo.id === action.payload) {
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        case 'CLEAR_COMPLETED': 
            return state.filter(todo => todo.completed !== true)
        case 'ADD_TAG': 
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return{
                        ...todo,
                        tag: action.payload.tag
                    }
                }
                return todo
            })
        default: 
            return state
    }
}

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        tag: '',
        id: 3892987589
    },

    {
        item: 'Watch Lakers game',
        completed: false,
        tag: '',
        id: 3892987590
    },

    {
        item: 'Do Laundry',
        completed: false,
        tag: '',
        id: 3892987591
    }
]