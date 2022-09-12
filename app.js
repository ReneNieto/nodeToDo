require('colors')

const { showMenu, pause } = require('./helpers/msg')

console.clear()
const main = async () => {
    console.log('hello world'.red)

    showMenu()

    //pause()
}


main()