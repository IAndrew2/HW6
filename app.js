const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//const render = require("htmlRenderer");
//const { finished } = require("node:stream");

const team = [];
addToTeam();

function addToTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Add an employee, or select 'Finish'.", 
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Finish"
            ]
        }
    ]).then(function(data) {
        const employeeRole = data.addEmployee;
        if (employeeRole === "Manager") {
            managerInfo();
        }
        else if (employeeRole === "Engineer") {
            engineerInfo();
        }
        else if (employeeRole === "Intern") {
            internInfo();
        }
        else if (employeeRole === "Finish") {
            renderTeam();
        }
    });
}

function managerInfo() {
    inquirer.prompt([
        {
            type: "input", 
            name: "managerName",
            message: "Manager's Name:"
        },
        {
            type: "input",
            name: "managerId",
            message: "Manager's ID:"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Manager's Email:"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Manager's Office Number:"
        }
    ]).then(function(data) {
        const manager = {name:data.managerName, managerID:data.managerID, managerEmail:data.managerEmail, managerOfficeNumber:data.managerOfficeNumber}
        console.table(manager)
        team.push(manager);
        addToTeam();
    });
}

function engineerInfo() {
    inquirer.prompt([
        {
            type: "input", 
            name: "engineerName",
            message: "Engineer's Name:"
        },
        {
            type: "input",
            name: "engineerId",
            message: "Engineer's ID:"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Engineer's Email:"
        }
    ]).then(function(data) {
        const engineer = {name:data.engineerName, engineerID:data.engineerID, engineerEmail:data.engineerEmail}
        console.table(engineer)
        team.push(engineer);
        addToTeam();
    });
}

function internInfo() {
    inquirer.prompt([
        {
            type: "input", 
            name: "internName",
            message: "Intern's Name:"
        },
        {
            type: "input",
            name: "InternId",
            message: "Intern's ID:"
        },
        {
            type: "input",
            name: "InternEmail",
            message: "Intern's Email:"
        }
    ]).then(function(data) {
        const intern = {name:data.internName, internID:data.internID, internEmail:data.internEmail}
        console.table(intern)
        team.push(intern);
        addToTeam();
    });
}

function renderTeam() {
    inquirer.prompt([
        {
            type: "input", 
            name: "Finish",
            message: "Finished"
        },
    ]).then(function(data) {
        const finsih = new finished(data.finish)
        team.push(finsih);
        addToTeam();
    });
}