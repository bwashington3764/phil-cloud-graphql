// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
/*(const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
*/

const { ApolloServer, gql } = require("apollo-server");
const db = require('./db')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`

  enum Genre {
    Pop,
    Rock,
    Alternative
    HipHop,
    Folk
  }

  type Track {
    title: String!
    number: Int!
  }

  type Artist {
    name: String!
  }

  type Album {
    title: String!
    artist: Artist!
    tracks: [Track!]!
    genre: Genre!
  }

  type Query {
    albums(genre: Genre): [Album!]!
    album(title: String!): Album
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    albums: (root, args, context) => {
      const isFilteringByGenre = args && args.genre;

      if (isFilteringByGenre) {
        return context.db.getAlbumsByGenre(args.genre)
      }

      return context.db.getAllAlbums();
    },
    album: (root, args, context) => {
      const albumTitle = args && args.title;

      try {
        return context.db.getAlbumByTitle(albumTitle);
      } catch (err) {
        return null;
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ db })
});

server.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + server.url);
})/*.then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});*/
