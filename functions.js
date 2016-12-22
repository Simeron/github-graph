class Functions {

    // creatingCommitInfo(newCommit) {
    //     return new Promise(
    //         (resolve) => {
    //             resolve(newCommit);
    //         }
    //     )
    // }


// describe('commit', function() {
//     it('should return the commit information', function() {
//         var commitInfo = require('../models/commit');
//         expect(commitInfo).to.not.be.undefined;
//     });
// });


describe( commitInfo(), function() {
    it('should take a photo object from Flickr and return a string', function() {
        var input = {
            author:       'simeron',
            commitDate:    '03/08/2016',
            commitMessage:   'this is a test'
        };
        var expected = input;
        var actual = commitModel.commitInfo(input);
        expect(actual).to.eql(expected);
    });
});

module.exports = Functions;