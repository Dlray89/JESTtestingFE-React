function ProjectSub(parent, args, context, info) {
    return context.prisma.$subscribe.project({ mutation_in: ["CREATED"]}).node()
}

const newProject = {
    subscribe: ProjectSub,
    resolve: payload => {
        return payload
    }
}

module.exports = {
    newProject
}