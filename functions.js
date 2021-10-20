let colors = ['Red', 'Green', 'Blue']

module.exports = {
    returnTwo: (number) => {
        return `${number}`
    },

    greeting: (name) => {
        return `Hello, ${name}.`
    },

    color: (color) => {
        return `My favorite color is ${color}.`
    },

    stateAge: (age) => {
        return `I am ${age}.`
    },

    addUser: (name, age) => {
        let user = {
            name, 
            age
        }

        if(age >= 21){
            return user
        } else {
            return "User not old enough"
        }
    },

    addColor: (color) => {
        colors.push(color.toLowerCase())
        return colors
    },
    
    add: (num1, num2) => {
        return num1+num2
    },

    multiply: (num1, num2) => {
        return num1*num2
    },

    divide: (num1, num2) => {
        return num1/num2
    },

    subtract: (num1, num2) => {
        return num1-num2
    },

    square: (num1) => {
        return num1*num1
    },

    sqrt: (num1) => {
        return Math.sqrt(num1)
    },

    negative: (num1) => {
        return num1*-1
    }
}