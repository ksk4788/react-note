export const defaults = {
    notes: []
};
export const resolvers = {};
export const typeDefs = [
    `
    schema {
        query: Query
        mutation: Mutation
    }
    type Query {
        notes: [Note]!
        note(id: Int!): Note
    }
    `
];
