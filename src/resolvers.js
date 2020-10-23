module.exports = {
  Query: {
    matches: async (_, { season, div }, { db }) => {
      try {
        const res = await db.query(
          `SELECT * FROM season${season} WHERE div='${div}'`
        );
        return res.rows;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
