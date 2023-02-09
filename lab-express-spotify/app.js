require("dotenv").config()
const express = require("express")
const hbs = require("hbs")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()

app.set("view engine", "hbs")
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"))

// Setting the spotify-api goes here:
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
})
  
// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body["access_token"]))
  .catch(error => console.log("Something went wrong when retrieving an access token", error))


// Our routes go here:

app.get("/", (req, res) => {
	res.render("index")
})

app.get("/artist-search", function (req, res) {
  const query = req.query.q

  spotifyApi
    .searchArtists(query)
    .then(data => {
      let artists = data.body.artists.items
      res.render("artist-search-results", { artists })
    })
    .catch(err => console.log("Error occured while searching artists: ", err))
})

app.get("/albums/:artistId", (req, res) => {
  const artistId = req.params.artistId

  spotifyApi
    .getArtistAlbums(artistId)
    .then(data => {
      const albums = data.body.items
      res.render("albums", { albums })
    })
    .catch(err => console.log("Error occured while searching albums: ", err))
})

app.get("/tracks/:albumId", (req, res) => {
  const albumId = req.params.albumId

  spotifyApi
    .getAlbumTracks(albumId)
    .then(data => {
      const tracks = data.body.items
      res.render("tracks", { tracks })
    })
    .catch(err => console.log("Error occured while viewing tracks: ", err))
})

app.listen(3000, () => console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊"))
