const { read } = require('fs');

require('colors')


const showMenu = () => {

    console.clear()

    console.log('=================================='.green);
    console.log('Please select an option');
    console.log('==================================\n'.green);


    console.log(`${'1.'.green} Create a new Task`)
    console.log(`${'2.'.green} List Tasks`)
    console.log(`${'3.'.green} List completed Tasks`)
    console.log(`${'4.'.green} List pending Tasks`)
    console.log(`${'5.'.green} Complete Tasks`)
    console.log(`${'6.'.green} Delete Task`)
    console.log(`${'0.'.green} Exit\n`)


    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,

    })

    readLine.question('Select an option: ', (opt) => {
        console.log({ opt })

        readLine.close()
    })

}

const pause = () => {

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,

    })

    readLine.question(`Press ${'ENTER'.green} to continue `, () => {
        readLine.close()
    })

}



module.exports = {
    showMenu,
    pause,

}