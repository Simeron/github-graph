class Index {
    static showLayout(req, res) {
        res.render("index");
    }

    // static showGoogleSearch(req, res){
    //     res.render("search");
    // }
    // the showgooglesearch will need to be taken out at some point - as was just a test

    static showUserNames(req, res){
        res.render("users");
    }

    static showRepos(req, res){
        console.log(req.session.repos.items);
        res.render("repos", {
            repos: req.session.repos
        });
    }

    static showCommits(req, res){
        console.log(req.session.commits_url);
        res.render("graph", {
            commits: req.session.commits_url
        });
    }
}

module.exports = Index;