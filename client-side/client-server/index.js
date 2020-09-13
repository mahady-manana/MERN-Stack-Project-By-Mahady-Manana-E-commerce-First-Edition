
import express from "express"
import devBundle from "./devBundle"
import path from "path"

const port = process.env.PORT || 3000
const CURRENT_WORKING_DIR = process.cwd()

const app = express()
devBundle.compile(app)

app.use(express.static('src'))

app.get('/*', (req, res) => {
	res.status(200).sendFile(path.join(CURRENT_WORKING_DIR, 'index.html'))
})

app.listen(port, () => {
	console.log(`Client rendering with express OK!\n-> See at : http://localhost:${port}`)
})
