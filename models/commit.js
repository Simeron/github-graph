class Commit {

    constructor(obj){
        this.author = obj.author.login;
        this.commitDate = new Date(obj.commit.committer.date);
        this.commitMessage = obj.commit.message;
        this.sha = obj.sha;
    }

}

module.exports = Commit;