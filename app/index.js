const Generator = require("yeoman-generator")
const yosay = require("yosay")

module.exports = class extends Generator {
    welcome() {
        this.log("Hello! Greetings from Team NameError")
        this.log("...Generating Node.js boilerplate...")
        this.log("")
    }
    
    writing() {
        this.fs.copy(this.templatePath("public"), this.destinationPath("public"))
		this.fs.copy(
			this.templatePath("_env"),
			this.destinationPath(".env")
		)
        this.fs.copy(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore')
        )
        this.fs.copy(
            this.templatePath("index.js"),
            this.destinationPath("index.js")
        )
        this.fs.copy(
            this.templatePath("LICENSE"),
            this.destinationPath("LICENSE")
        )
        this.fs.copy(
            this.templatePath("package-lock.json"),
            this.destinationPath("package-lock.json")
        )
		this.fs.copy(
			this.templatePath("package.json"),
			this.destinationPath("package.json")
		)
	}

    runNpm() {
        this.log("...Installing all node dependencies...")
        this.npmInstall()
    }

    end() {
        this.log("")
        this.log("Finished generating node.js boilerplate! Thanks for having patience.")
        this.log(yosay("Thanks for installing our package!  Regards, Team NameError  Courtesy: Yeoman"))
        this.log("\nNow, go ahead and test the boilerplate:     npm start     ")
    }
}