// const { TestWatcher } = require('@jest/core')
// const { TestWatcher } = require('@jest/core')
const {returnTwo, greeting, color, stateAge, addUser, addColor, add, multiply, divide, subtract, square, sqrt, negative} = require('./functions')

test('Should return 2', () => {
    expect(returnTwo(2)).toEqual('2')
})

test('Should return Hello (name)', () => {
    expect(greeting('Adam')).toEqual('Hello, Adam.')
})

test('Should return My favorite color is (color).', () => {
    expect(color('blue')).toEqual('My favorite color is blue.')
})

test('Should return I am [age]', ()=>{
    expect(stateAge(25)).toEqual('I am 25.')
})


it('Should return user object or a failed status', () => {
    expect(addUser('Joey', 21)).toEqual({name: 'Joey', age: 21})

    expect(addUser('Chandler', 15)).toEqual('User not old enough')
})

it('Should add new color and return list of unique colors', () => {
    expect(addColor('Pink')).toContain('pink')
})

describe('math functions', () => {

test('Should add num1 and num2', () => {
        expect(add(5,9)).toBe(14)
    })
    
    test('Should multiply num1 and num2', () => {
        expect(multiply(5,9)).toBe(45)
    })
    
    test('Should divide num1 and num2', () => {
        expect(divide(10,2)).toBe(5)
    })
    
    test('Should subtract num1 and num2', () => {
        expect(subtract(9,5)).toBe(4)
    })

    test('Should square num1', () => {
        expect(square(5)).toBe(25)
    })

    test('Should provide the sqrt of num1', () => {
        expect(sqrt(25)).toBe(5)
    })

    test('Should make the num1 negative', () => {
        expect(negative(5)).toBe(-5)
    })

    })