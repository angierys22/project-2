module.exports = function(table,data) {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed");
      return table.create(data);
   }
   return Promise.resolve();
};
