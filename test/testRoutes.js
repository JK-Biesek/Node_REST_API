const request = require('supertest');
const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const objContact = require('../model/model');
const should = chai.should();
const server = require('../index.js');
const expect = require('chai').expect;
chai.use(chaiHttp);

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
        const data = {
            firstName: 'Test',
            lastName: 'Tester',
            email: 'jakub@test.com',
            phone: 123456789
        }
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
    it("should reject if no data",(done)=>{
        const data = {
            firstName: '',
        }
        chai.request(server).post("/contact").send(data)
        .end((err,res)=>{
            res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('firstName');
                res.body.errors.firstName.message.should.be.eq('Type your Name');
                done();
        });
    });
});
