const App = require("./app");
const PORT = process.env.PORT;

App.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});