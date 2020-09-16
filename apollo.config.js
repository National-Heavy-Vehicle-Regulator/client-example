/**
 * To authenticate with Apollo Studio to pull down your schema,
 * create a file next to the apollo.config.js called .env.
 * This should be an untracked file (i.e., don't commit it to Git).
 * Go to your graph's Settings page in Apollo Studio to get the API key.
 **/
module.exports = {
  client: {
    service: {
      name: 'pbs',
      localSchemaFile: './graphql/schema.graphql'
    }, // the name of the graph in Apollo Studio
    includes: ["./src/**/*.ts", "./src/**/*.gql"],
    excludes: ["./src/**/*.test*"]
  }
};
