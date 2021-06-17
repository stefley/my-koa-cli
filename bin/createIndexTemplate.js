import ejs from 'ejs'
import fs from 'fs'
import path from 'path'
import prettier from 'prettier'
import { fileURLToPath } from 'url'

export default (config) => {
    const __dirname = fileURLToPath(import.meta.url)
    const indexTemplate = fs.readFileSync(path.resolve(__dirname,'../template/index.ejs'))
    const code = ejs.render(indexTemplate.toString(), {
        port: config.port,
        middleWare: config.middleWare
    })
    return prettier.format(code,{ parser: "babel" })
};