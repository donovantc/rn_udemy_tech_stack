export const selectLibrary = (libraryId) => { /* Action Creator */
    return {
        type: 'select_library',
        payload: libraryId
    };
};