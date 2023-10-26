const app = require('../index')
const request = require('supertest');

describe('Todo Unit Test', () => {
    test('Add Todo Successfully', (done) => {
        const newTodo = {
            title: "Todo"
        }
        
        request(app)
            .post('/api/v1/todo/add')
            .send(newTodo)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Activity created!')
                done()
            })
            .catch(done)
    })

    
    test('Get all list', (done) => {
        request(app)
            .get('/api/v1/todo')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
            expect(response.body.data.length).toBe(2)
            done()
        }).catch(done)
    })
   
    test('Get Activity Details', (done) => {
        request(app)
            .get(`/api/v1/todo/1`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
              expect(response.body.data.activity).toBe("Do Week 11 RAKAMIN Assignments")
              done()
        }).catch(done)
    })

    test('Edit Activity', (done) => {
        const id = 1
        const updatedTodo = {
            activity: "Activity 1 Updated",
        }
        
        request(app)
            .put(`/api/v1/todo/${id}`)
            .send(updatedTodo)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('Activity updated!')
                expect(response.body.data).toHaveProperty('activity', 'Activity 1 Updated')
                done()
            })
            .catch(done)
    })

    test('Delete Activity', (done) => {
        const id = 100

        request(app)
            .delete(`/api/v1/todo/${id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe("Activity deleted!")
                done()
        })
        .catch(done)
    })
}) 