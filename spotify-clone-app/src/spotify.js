// send the user to spotify authentications.

export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId= "975405d0f4de4e368861691d54d79162";

//it allows what user is allowed to access.
const scopes= [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () =>{
    //go to url and find hash and get the access token.
    return window.location.hash.substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        //parts[0] = accesstoken and take that value;
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;