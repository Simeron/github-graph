class Commit {

    constructor(obj) {
        console.log(obj);
        this.author = obj.author.login;
        this.commitDate = new Date(obj.commit.committer.date);
        this.commitMessage = obj.commit.message;
    }

}

module.exports = Commit;



//     Person = {
//         name: "Sim",
//         age:" 40"
//     }


// func = (obj) => {
//     this.name = obj.name;
//     this.age = obj.age

// }