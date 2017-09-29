import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress } from "graphql-server-express";
import { processRequest } from "apollo-upload-server";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use(
  "/graphql",
  bodyParser.json(),
  apolloUploadExpress({ uploadDir: "./" }),
  graphqlExpress({ schema })
);

app.listen(3030);
