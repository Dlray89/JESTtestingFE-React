async function projects(parent, args, context) {
    const count = await context.prisma
    .projectConnection({
        where: {
            OR: [
                {projectName_contains: args.filter},
                {description_contains: args.filter}
            ],
        },
    })
    .aggregate()
    .count()
    const project = await context.prisma.projects({
        where: {
            OR: [
                {projectName_contains: args.filter},
                {description_contains: args.filter}
            ]
        },
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy
    })
    return {
        count,
        where
    }
}