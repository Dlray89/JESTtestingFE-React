async function feed(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            {projectName_contains: args.filter},
            {description_contains: args.filter},
        ],
    } : {}

    const projects = await context.prisma.projects({
        where
    })
    return projects

}

module.exports = {
    feed,
}