// const { TestWatcher } = require('@jest/core')
// const { TestWatcher } = require('@jest/core')
const {returnTwo, greeting, add, multiply, divide, subtract, square} = require('./functions')

test('Should return 2', () => {
    expect(returnTwo(2)).toEqual('2')
})

test('Should return Hello (name)', () => {
    expect(greeting('Adam')).toEqual('Hello, Adam.')
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

    })