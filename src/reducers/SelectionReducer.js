export default (state = null, action) => { /* not allowed to return undefined thats why null */
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state; 
    }
};