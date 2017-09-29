export default {
  Query: {
    hello: () => "hi"
  },
  Mutation: {
    uploadFile: (parent, { file }) => {
      console.log(file);
      return true;
    }
  }
};
