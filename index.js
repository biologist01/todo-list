#! /usr/bin/env node
import inquirer from "inquirer";
let list = [];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt({
        name: "action",
        type: 'input',
        message: "Enter your task: ",
    });
    while (answer.action == "") {
        answer = await inquirer.prompt({
            name: "action",
            type: 'input',
            message: "dont add blank task: ",
        });
    }
    list.push(answer.action);
    console.log(list);
    let addMore = await inquirer.prompt({
        name: "add",
        type: "list",
        choices: ["add more", "exit", "remove", "update"]
    });
    if (addMore.add == "add more") {
        condition = true;
    }
    else if (addMore.add == "exit") {
        condition = false;
    }
    else if (addMore.add == "remove") {
        let remove = await inquirer.prompt({
            name: "remove",
            type: "list",
            choices: list,
        });
        list.splice(list.indexOf(remove.remove), 1);
        console.log(list);
    }
    else if (addMore.add == "update") {
        let update = await inquirer.prompt([{
                name: "update",
                message: "which one would you like to update ?",
                type: "list",
                choices: list
            },
            {
                name: "newChange",
                type: "input",
                message: "replace it with: "
            }
        ]);
        list[list.indexOf(update.update)] = update.newChange;
        console.log(list);
    }
}
