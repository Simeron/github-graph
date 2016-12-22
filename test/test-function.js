const assert = require('assert');
const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const insert = require('chai').assert;
const Functions = require("../functions");
const func = new Functions();

// describe("commits model", () => {
//     it("should show information about commits", (done) => {
//         class Commit {
//             constructor(author, commitDate, commitMessage) {
//                 this.author = author.login;
//                 this.commitDate = new Date(commit.committer.date);
//                 this.commitMessage = commit.message;
//             }
//         }
//         let newCommit = new Commit("simeron","14/08/2016","this is a test");

//         func.creatingCommitInfo(newCommit)
//             .then(result => {
//                 expect(newCommit).to.include({ author: "simeron", commitDate: "14/08/2016", commitMessage: "this is a test" });
//                 done();

//             })
//     });

// const commitInformation = require("../models/commit")
// const newCommit= {
//     author: "simeron",
//     commitDate: 03/08/2016,
//     commitMessage: "test commit"

// }




describe(commitModel, Function() {
    it('should exist', function() {
        var commitModel = require('../model/commit');
        expect(commitModel).to.not.be.undefined;
    });
})



// var expect = require('chai').expect;

// describe('FlickrFetcher', function() {
//     it('should exist', function() {
//         var FlickrFetcher = require('./flickr-fetcher.js');
//         expect(FlickrFetcher).to.not.be.undefined;
//     });
// });