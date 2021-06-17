#!/usr/bin/env node
import fs from 'fs'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js'
import createConfig from './createConfig.js'
import rimraf from 'rimraf'
import chalk from 'chalk'
import execa from 'execa'

const config = createConfig()

//如果存在文件先删除
rimraf.sync(`./${config.packageName}`)
console.log(chalk.blue("项目生成中...."))
// fs创建文件夹
fs.mkdirSync(`./${config.packageName}`)


// fs 写入文件
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config))
console.log(chalk.blue("生成入口文件"))
// fs 创建package.json
fs.writeFileSync(`${getRootPath()}/package.json`, createPackageTemplate(config))
console.log(chalk.blue("生成package.json文件"))
function getRootPath() {
    return `./${config.packageName}`
}
console.log(chalk.blue("开始安装依赖...."))
// 安装依赖
execa("npm install", {
    cwd: getRootPath(),
    stdio: [2, 2, 2],
})