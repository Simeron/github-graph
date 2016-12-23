class Commit {

    /**
    * This code talks to my fetchCommits API in my libs folder to and only sends back the data listed below. This is the data for the graph, so only whats needed is being displayed
    * @param obj,
    */
    constructor(obj) {
        console.log(obj);
        this.author = obj.author.login; //dot notation tells you where to get the informaton from in the object
        this.commitDate = new Date(obj.commit.committer.date);
        this.commitMessage = obj.commit.message;
    }

}

module.exports = Commit;
