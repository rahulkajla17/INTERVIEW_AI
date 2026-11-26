const path = require("path")
require("dotenv").config({ path: path.join(__dirname, ".env") })
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
