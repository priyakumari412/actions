let request = require("supertest")
let app = require("../server")

describe('check the server is running...', () => {
    it('sends the response message...', async () => {
        let res = await request(app).get('/')
        expect(res.status).toBe(200)
        expect(res.text).toBe("hello server!")
    })
})