var accessToken = "BQBrC8UTQYgJP6aRzWXo9UHauYLy24I6yJvfh-PTROvu-9mNse89Zk4cENsKLbzWJ5_MGr99UOkiqBqYfNqP76fvLkTuj2l_SxT9Y4NKgAu1CqQW59lUEtWK2M9m0R4yZVg7m6PFq7RwpMkejxSqtiQRjxPedBTNYmvO59id_Vs3UjhPxPlI8qk";

$.ajax({
    url: 'https://api.spotify.com/v1/playlists/6JxFxPyTSPcdIehE5ylnkI/tracks',
    type: 'GET',
    headers: {
        'Authorization' : 'Bearer ' + accessToken
    },
    success: function(data) {
        console.log(data);
    }
});

// VanillaJS
// fetch("https://api.spotify.com/v1//6JxFxPyTSPcdIehE5ylnkI/tracks", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${userAccessToken}`     
//   }
// })
// .then(response => response.json())
// .then(({playlistData})) => {
//     console.log(playlistData);
//   })
// }
