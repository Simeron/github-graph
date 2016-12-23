const FetchUsers = require("../lib/fetchUsers");
const FetchRepo = require("../lib/fetchRepos");
const FetchCommits = require("../lib/fetchCommits");


/**
   * Overall this file the show controller talks to the lib api document
    */


class ShowController {

    static getUsers(req, res) {
        FetchUsers.doFetchUsers(req.body.username)
            .then(result => {
                res.status(200).send({
                    user: req.body.username,
                    result: result
                });
            })
            .catch(err => {
                res.status(400).send(err);
            });
    }


    static getRepos(req, res) {
        FetchRepo.doFetchRepos(req.body.repos)
            .then(result => {
                //console.log(result);
                req.session.repos = result;
                res.status(200).send({
                    user: req.body.repos,
                    result: result
                });
            })
            .catch(err => {
                console.log(err.message);
                res.status(400).send(err);
            });
    }

    static getCommits(req, res) {
        FetchCommits.doFetchCommits(req.body.commitsInfo)
            .then(result => {
                //console.log(result);
                req.session.commits = result; 
                res.status(200).send({
                    user: req.body.commits_url,
                    result: result
                });
            })
            .catch(err => {
                console.log(err.message);
                res.status(400).send(err);
            });
    }

    static returnCommits(req, res) {
        res.status(200).send(req.session.commits);
    }
}

module.exports = ShowController;