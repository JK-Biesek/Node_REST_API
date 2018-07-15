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
