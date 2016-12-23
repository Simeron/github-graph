const FetchUsers = require("../lib/fetchUsers");
const FetchRepo = require("../lib/fetchRepos");
const FetchCommits = require("../lib/fetchCommits");

class ShowController {

    /**
    * This code talks to my API in my libs folder to fetch the user names for when someone searches for a GitHub user handle - file(fetchUsers)
    * @param req,
    * @param res,
    */
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


    /**
    * This code talks to my API in my libs folder to fetch the repos for when someone clicks on a GitHub user handle - file(fetchRepos)
    * @param req,
    * @param res,
    */
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

    /**
    * This code talks to my API in my libs folder to fetch the commits for when someone hovers over one of the points on the graph - file(fetchCommits)
    * @param req,
    * @param res,
    */
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