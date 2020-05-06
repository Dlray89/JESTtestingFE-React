//install graphql-yoga and require it
const {ApolloServer} = require("apollo-server")
const { prisma } = require("../prisma/..src/genertated/prisma-client")

const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Subscription = require("./resolvers/Subscription")


const PORT = process.env.PORT || 8000




const resolvers ={
 Query,
 Mutation,
 Subscription,
}


const server = new ApolloServer({
     typeDefs: "./src/schema.graphql",
      resolvers,
    context: { prisma }
})

const { url } = server.listen(PORT)
console.log(`===========${ url }==========`)
