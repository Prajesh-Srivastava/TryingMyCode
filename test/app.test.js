const request=require('supertest') 
const app =require('../src/app.js')


describe("GET /POSTME",()=>{
    describe("Take a output from the POSTME function",()=>{
       
        test("should respond with 200 status code",async ()=> {
            const response = await (await request(app).post("/").send('prajesh'))
            expect(response.statusCode).toBe(200);
        })
        
    })
})