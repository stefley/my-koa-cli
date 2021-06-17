import question from './questions/index.js'
const answer = await question()
console.log("========",typeof answer.packageName)
export default () => {
    return {
        packageName: answer.packageName.trim(),
        port: answer.port,
        middleWare: {
            static: answer.middleWare.includes("koa-static"),
            router: answer.middleWare.includes("koa-router")
        }
    }
}
