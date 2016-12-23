const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const assert = require('chai').assert;
const Commit = require("../models/commit");


describe("commitModel", () => {
    it("should exist", (done) => {

        let testObject = {
            author:
            {
                login:'miller'
            }, 
            commit:
            {
                committer:
                {
                    date:"2016-05-23T13:04:12Z"
                },
                message: 'test'
            },
            
        }
        let commitModel = new Commit(testObject);
        assert.isObject(commitModel,"it is an object");
        done();
    });
})