function post(parent, args, context, info) {
    return context.prisma.createProject({
        projectName: args.projectName,
        description: args.description
    })
}

module.exports = {
    post,
}