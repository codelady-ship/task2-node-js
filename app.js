import process from "process"

const args = process.argv;
const n1= +args[2]
const o= +args[3]
const n2= +args[4]
const result=""
if(o === "+"){
    result = `${n1}+ ${n2} = ${n1+n2}`
}else if(o === "-"){
    result = `${n1}- ${n2} = ${n1-n2}`
}else if(o === "/"){
    result = `${n1}/ ${n2} = ${n1/n2}`
}else if(o === "*"){
    result = `${n1} ${n2} = ${n1*n2}`
}
console.log(chalk.red(result))


/*const command = args[2];
const fileName = args[3];
const content = args[4];

//
// node app createFile users.txt "salam olsun"


if (command === 'readFile'){}
else if (command === 'createFile'){}
else if (command === 'deleteFile') {}
else if (command === 'createFolder') {}
else if (command === 'deleteFolder') {}
 */