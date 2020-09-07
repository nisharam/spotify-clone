import React ,{useEffect,useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {useDataLayerValue} from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
//get the access token.
//useEffect is run code based on given condtion.
//[] == runs only once.
//[name]== runs everytime the name changes.

// const [token, setToken] = useState(null); //its like short term memory storage for taking the token.

const [ {user, token}, dispatch] = useDataLayerValue();

useEffect(() => {
  const hash = getTokenFromUrl();
  window.location.hash = ""; // clear the token from url because of safety
  const _token = hash.access_token; //token is insided of the access token object.

  // save this token.

  if(_token){
    // setToken(_token);

    dispatch({
      type: 'SET_TOKEN',
      token: _token
    })
    //just passing the token  to spotify api.
    //it will back and forth btwn spotify and react app.
    spotify.setAccessToken(_token);


    //it gives the user account details.
    spotify.getMe()
    .then(user => {
      console.log('Hi her are mu details', user);

      dispatch({
        type: 'SET_USER',
        user: user
      })
    });

spotify.getUserPlaylists()
.then(playlists => {
  dispatch({
    type: 'SET_PLAYLIST', 
    playlists: playlists
  })
});

spotify.getPlaylist('37i9dQZF1DX3rxVfibe1L0')
.then(response => {
  dispatch({
    type: 'SET_DISCOVER_WEEKLY',
    discover_weekly: response
  })
});
  }

},[]);
console.log('The user from data layer is', user);
console.log(' the token is', token);

  return (
    <div className="app">
      {
       token ? ( <Player spotify={spotify} /> ) : (<Login /> ) 
      }
    </div>
  );
}

export default App;


//install spotify-web-api-js.It is a service which allows us to connect our apps with spotify
//web services.