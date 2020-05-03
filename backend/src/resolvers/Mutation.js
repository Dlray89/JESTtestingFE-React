function post(parent, args, context, info) {
    return context.prisma.createProject({
        projectName: args.projectName,
        description: args.description
    })
}

function remove(parent, args, context, info) {
    return context.prisma.deleteProject({
        where: {id: args.id }
    },
    info
    )
}

module.exports = {
    post,
    remove,
}