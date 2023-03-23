const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    writing () {
        const templates = [
            'app.js',
            'package.json',
            'router/404.js',
            'router/auth.js',
            'router/cors.js',
            'router/error.js',
            'router/login.js',
            'router/user.js',
            'utils/auth.js',
        ]

        this.answers = { name: this.appname }

        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}

