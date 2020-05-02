/*
first register for a spotify API .. https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app

grab your access token ...
https://developer.spotify.com/documentation/general/guides/app-settings/

once you have credientials you could make "requests" to spotify's servers with the following:

*/


// jQuery
/*
$.ajax("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
  success: (data) => { do stuff with the data }
});
*/
var accessToken = "XXXXX";
$.ajax({
    url: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks,
    type: 'GET',
    headers: {
        'Authorization' : 'Bearer ' + accessToken
    },
    success: function(data) {
        console.log(data);
    }
});

// VanillaJS
fetch("https://api.spotify.com/v1/playlists/{playlist_id}/tracks", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${userAccessToken}`     
  }
})
.then(response => response.json())
.then(({playlistData})) => {
    console.log(playlistData);
  })
}

/*
but how did you know what url to put for the playlist? the docs of course: https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks/

*/