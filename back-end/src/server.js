const app = require("./app");
// Imports port to be started on. Defaults to 5000
const {PORT = 5000} = process.env;

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
