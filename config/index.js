'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const fs = require('fs')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const marked = require('marked')
let {PythonShell} = require('python-shell')

const exercisesFolder = "static/exercises"

let app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/exercises-list", (req, res, next) => {
    var arr = []

    var files = fs.readdirSync(exercisesFolder)

    files.forEach(file => {
        if (fs.statSync(path.join(exercisesFolder, file)).isDirectory()) {
            arr.push(file)
        }
    })

    res.json(arr)
})

app.post("/exercise", (req, res) => {
    const exercise = req.body.name
    const folder = path.join(exercisesFolder, exercise, 'config.json')
    const config = JSON.parse(fs.readFileSync(folder))
    res.json(config)
})

app.post("/load-script", (req, res) => {
    const id = req.body.id
    const exercisePath = path.join(exercisesFolder, id)
    const scriptPath = path.join(exercisePath, 'main.py')
    const readmePath = path.join(exercisePath, 'README.md')

    const script = fs.readFileSync(scriptPath, 'utf8')
    const readme = marked(fs.readFileSync(readmePath, 'utf8'))
    res.json({script: script, readme, readme})
})

app.post("/run-script", (req, res, err) => {
    PythonShell.runString(req.body.code, null, function (err, results) {
        if (err) {
            res.json(err)
        } else {
            res.json(results)
        }
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

module.exports = {
    dev: {

        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
