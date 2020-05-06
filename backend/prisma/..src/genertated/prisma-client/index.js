"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Project",
    embedded: false
  },
  {
    name: "CheckList",
    embedded: false
  },
  {
    name: "Task",
    embedded: false
  },
  {
    name: "JournalEntries",
    embedded: false
  },
  {
    name: "Label",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/david-979c00/backend/dev`
});
exports.prisma = new exports.Prisma();
