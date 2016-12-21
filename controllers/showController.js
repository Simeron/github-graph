const FetchUsers = require("../lib/fetchUsers");
const FetchRepo = require("../lib/fetchRepos");
const FetchCommits = require("../lib/fetchCommits");

class ShowController {
    // static users(req, res){
    //     res.render("repos");
    // }

    static getUsers(req, res){
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


    static getRepos(req, res){
        FetchRepo.doFetchRepos(req.body.repos)
            .then(result => {
                console.log(result);
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

    static getCommits(req, res){
        FetchCommits.doFetchCommits(req.body.commits_url)
            .then(result => {
                console.log(result);
                req.session.commits_url = result; //this could have potentially of broken something
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
}

module.exports = ShowController;