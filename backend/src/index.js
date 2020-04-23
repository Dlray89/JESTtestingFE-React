//install graphql-yoga and require it
const {GraphQLServer} = require("graphql-yoga")



let projects = [{
    id: "project-0",
    projectName: "Create A project app",
    description: "Use npx create-react-app to get started",
}]

let idCount = projects.length


const resolvers ={
    Query: {
        info: () => `project api`,
        feed: () => projects,
    },

    Mutation: {
        post: (parent, args) => {
            const project = {
                id: `project-${idCount++}`,
                projectName: args.projectName,
                description: args.description,
            }
            projects.push(project)
            return project
        }
    },
}


const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,

})

server.start(() => console.log(`server is up`))

