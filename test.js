const readlineSync = require("readline-sync")

const cmd = true
while(cmd){
    console.log('SSS')
    const tmp = readlineSync.question("entre un nombre")
    switch (tmp) {
        case 1:
            cmd = true
            break;
    
        default:
            break;
    }
}
