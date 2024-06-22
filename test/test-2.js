const supertest = require("supertest");

describe ('restful-api.dev API TEST', () => {
    it ('TC1= GET single object', async ()=> {
        const response = await supertest ("https://reqres.in/api").get("/users/2")
        console.log(response.status)
        console.log(response.body);
    });

    it ('TC2= POST single object', async ()=> {
        const response = await supertest ("https://reqres.in/api").get("/users")
        console.log(response.status)
        console.log(response.body);
    });

    it ('TC3= DELETE single object', async ()=> {
        const response = await supertest ("https://reqres.in/api").get("/users/2")
        console.log(response.status)
        console.log(response.body);
    });

    it ('TC4= PUT single object', async ()=> {
        const response = await supertest ("https://reqres.in/api").get("/users/2")
        console.log(response.status)
        console.log(response.body);
    });
});