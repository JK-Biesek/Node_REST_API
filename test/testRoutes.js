const request = require('supertest');
const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const objContact = require('../model/model');
const should = chai.should();
const server = require('../index.js');
const expect = require('chai').expect;
chai.use(chaiHttp);

const data = {
    firstName: 'Test',
    lastName: 'Tester',
    email: 'jakub@test.com',
    phone: 123456789
};
const data1 = {
    firstName: 'Test2',
    lastName: 'Tester2',
    email: 'test@test.com',
    phone: 0987654312
}
describe('Port 3015', () => {
    it('Main page status', function(done) {
        chai.request(server).get('/').end((error, res, body)=>{
            res.should.have.status(200);
            res.text.should.be.eql("Server is running at port 3015");
            done();
        }); 
    });
    });
describe('First test', () => {
    it('Should assert true to be true', () => {
        expect(true).to.be.true;
    });
});
describe("REST API", () => {
    it("Checks contact route", (done) => {
        chai.request(server).get("/contact").end((err, res) => {
            if (err) {
                console.log(err);
            } else {
                res.should.have.status(200);
                res.body.should.be.an('array');
                done();
            }
        });
    });
    it("DB table should not be empty", (done) => {
        chai.request(server).get("/contact").end((err, res) => {
            if (err) {
                console.log(err);
            } else {
                res.body.length.should.not.be.eql(0);
                done();
            }
        });
    });
    it("should POST a contact entry", (done) => {
        chai.request(server).post("/contact").send(data)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('firstName');
                    res.body.should.have.property('phone').that.is.a('number');
                    done();
                }
            });
    });
    it("should reject if no data", (done) => {
        let data = {
            firstName: '',
        }
        chai.request(server).post("/contact").send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('firstName');
                res.body.errors.firstName.message.should.be.eq('Type your Name');
                done();
            });
    });
    it("should Update a record with given id", (done) => {
        chai.request(server).post("/contact").send(data)
            .end((err, res) => {
                res.body.should.have.property('_id');
                if (res.body.should.have.property('_id')) {
                    let id = res.body._id;
                    chai.request(server).put("/contact/" + id).send(data1)
                        .end((err, res) => {
                            res.body.should.be.a('object');
                            res.body.firstName.should.be.eq('Test2');
                            done();
                        });
                }
            });
    });

    it("Should delete a record by given id",(done)=>{
        chai.request(server).post("/contact").send(data)
        .end((err,res)=>{
            if (res.body.should.have.property('_id')) {
                let id = res.body._id;
                chai.request(server).delete("/contact/" + id)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.have.property('message').eq('Entry deleted sucessfully');
                    res.body.should.not.have.property('firstName');
                    done();
                });
            }
        });
    });
});

