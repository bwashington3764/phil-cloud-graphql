const { ApolloServer, gql } = require("apollo-server");
const fs = require('fs');
const path = require('path');
const GQL = require('./GQL');

let completeData = {};
const dataFileArray = [
  {'Donation Data':'Donation_Data'},
  {'Donation Participation':'Donation_Participation'},
  {'Volunteer Activity':'Volunteer_Activity'},
  {'Volunteering Participation':'Volunteering_Participation'}
];
dataFileArray .forEach(file => {
  let json = fs.readFileSync(path.join(__dirname, `./data/${Object.keys(file)}.json`));
  let data = JSON.parse(json);

  completeData[Object.values(file)] = data; 
});

//console.log(completeData['Volunteering_Participation']);
//console.log(GQL.typeDefs);

const typeDefs = GQL.typeDefs;

const resolvers = {
  Query: {
    Donation_Data: () => completeData['Donation_Data'],
    Donation_Participation:() => completeData['Donation_Participation'],
    Volunteer_Activity:() => completeData['Volunteer_Activity'],
    Volunteering_Participation:() => completeData['Volunteering_Participation']
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

server.listen(process.env.PORT, () => {
  console.log("Your app is listening on port ");
}).then(({ url }) => {
  console.log(`${url}`);
});




/*

Example

*/

/*const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

server.listen(process.env.PORT, () => {
  console.log("Your app is listening on port ");
}).then(({ url }) => {
  console.log(`${url}`);
});

*/