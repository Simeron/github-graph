class Index {
     /**
     * This code renders my index page
     * @param req,
     * @param res,
     */
    static showLayout(req, res) {
        res.render("index");
    }

     /**
     * This code renders my users page,
     * This code can't be removed - crashes app
     * @param req,
     * @param res,
     */
    static showUserNames(req, res) {
        res.render("users");
    }
    
     /**
     * This code renders my repos page,
     * This code also records my sessions as well
     * @param req,
     * @param res,
     */
    static showRepos(req, res) {
        console.log(req.session.repos.items);
        res.render("repos", {
            repos: req.session.repos //this line saves into sessions
        });
    }


     /**
     * This code renders my graph page,
     * This code also records my sessions as well
     * @param req,
     * @param res,
     */
    static showCommits(req, res) {
        console.log(req.session.commits_url);
        res.render("graph", {
            commits: req.session.commits_url //this line saves into sessions
        });
    }
}

module.exports = Index;