const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    matches(season: String!, div: String!): [Match!]!
  }

  type Match {
    date: String
    time: String
    hometeam: String!
    awayteam: String!
    fthg: Int!
    ftag: Int!
    ftr: String!
    referee: String
    hs: Int
    aws: Int
    hst: Int
    ast: Int
    hf: Int
    af: Int
    hc: Int
    ac: Int
    hy: Int
    ay: Int
    hr: Int
    ar: Int
  }
`;

module.exports = typeDefs;
