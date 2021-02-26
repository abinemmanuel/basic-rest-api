'use strict'
const { handler } = require('./getResults')

describe('When invoking getResults function', () => {
    // TODO: Add lifecycle methods as needed
    
    it('Should return list of results', async () => {
        const event = {}
        const expected = ["First", "Second", "Fourth", "Third"]
        const response = await handler(event)
        expect(response.statusCode).toBe(200)
        expect(response.headers).toBeTruthy()
        expect(response.body).toBeTruthy()
        expect(JSON.parse(response.body)).toEqual(expect.arrayContaining(expected))
    })
})