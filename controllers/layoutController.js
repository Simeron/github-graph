 /**
     * This document renders my pages
     */

class Index {
    static showLayout(req, res) {
        res.render("index");
    }

    static showUserNames(req, res) {
        res.render("users");
    }

    static showRepos(req, res) {
        console.log(req.session.repos.items);
        res.render("repos", {
            repos: req.session.repos //this line saves into sessions
        });
    }

    static showCommits(req, res) {
        console.log(req.session.commits_url);
        res.render("graph", {
            commits: req.session.commits_url //this line saves into sessions
        });
    }
}

module.exports = Index;