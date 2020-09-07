export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item:null,
    // will remove after development.
    token: "BQALEXQ0lQpUUOQTuL86y1xDzFcFWitoQU3zze1i9qu2cwSxJuTQnTAOOo_AOCcufBimtjIGLi8gTrKd16qBsD9cDU-bGgUF_Jklax0Cw-6U2dh_ixWY85L9HiIZM5U0sH3F0Aoda1aPnIkzfNUOcr9trraJeWQbOgkK2iQFOi9Ak_nHL5Ny"
}

//state == how the data layer looks like.
//action == set the item curretnly listing to something.
const reducer = (state,action) => {
    console.log(action);

    // action has type . 
    // here it is returning the new state .
    switch(action.type){
        case 'SET_USER': return {
            ...state,
            user: action.user
        }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default: return state;

    }
}

export default reducer;
