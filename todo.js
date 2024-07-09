import inquirer from "inquirer";
let to_do_list = [];
while (true) {
    let options = await inquirer.prompt([{
            type: "list",
            name: "userOptions",
            message: "What do you want to do?",
            choices: ["ADD", "REMOVE", "SEE LIST", "EXIT"]
        }]);
    if (options.userOptions === "ADD") {
        let addOption = await inquirer.prompt([{
                type: "input",
                name: "addtask",
                message: "What do you want to add?"
            }]);
        to_do_list.push(addOption.addtask);
        console.log(to_do_list);
    }
    ;
    if (options.userOptions === "REMOVE") {
        let removeOption = await inquirer.prompt([{
                type: "list",
                name: "removetask",
                message: "What do you want to remove?",
                choices: to_do_list
            }]);
        const index = to_do_list.indexOf(removeOption.removetask);
        to_do_list.splice(index, 1);
        console.log("\n current TO_DO LIST");
        console.log(to_do_list);
    }
    if (options.userOptions === "SEE LIST") {
        if (to_do_list.length === 0) {
            console.log("Your list is Empty");
        }
        else {
            console.log("\n Your TO_DO LIST");
            console.log(to_do_list);
        }
    }
    if (options.userOptions === "EXIT") {
        console.log("Thanks for using our program");
        break;
    }
}
