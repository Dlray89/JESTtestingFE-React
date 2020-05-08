const { prisma } = require("../../prisma/..src/genertated/prisma-client")



function post(parent, args, context, info) {
    return context.prisma.createProject({
        projectName: args.projectName,
        description: args.description
    })
}

function remove(parent, args,context,info) {
    return context.prisma.removeProject({
        id: args.id
    })
}



module.exports = {
    post,
    remove,
  
}