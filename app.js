const mysql = require("mysql");
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "top_songsDB",
})

connection.connect(err => {
    if(err) throw err
    console.log(`Connected on thread ${connection.threadId}`)
    initialPrompts()
})

function initialPrompts() {
    inquirer.prompt([
        {
            type:"list",
            name: "action",
            message: "What do you want to do?",
            choices: [
                "Artist Search", 
                "Multi-Search",
                "Range Search",
                "Song Search", 
                "Exit"
            ]
        }
    ]).then(answer => {
        switch(answer.action) {
            case "Artist Search":
                artistSearch();
                break

            case "Multi-Search":
                multiSearch();
                break

            case "Range Search":
                rangeSearch();
                break

            case "Song Search":
                songSearch();
                break

            default: 
                connection.end()
                process.exit()
        }
    })
}

function artistSearch(){
    console.log("Seaching for artist...")
    initialPrompts()
}

function multiSearch() {
    console.log("Running a multi-search...")
    initialPrompts()
}

function rangeSearch() {
    console.log("Range search...")
    initialPrompts()
}

function songSearch() {
    console.log("Searching for song...")
    initialPrompts()
}