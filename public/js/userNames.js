$(() => {

    $("#search").click((e) => {
        e.preventDefault();
        $.ajax({
            url: '/fetch-Users',
                method: 'POST',
                data:{
                    username: $("#searchBar").val()
                }
            })
            .then((data) =>  {
                let theData = data.result.items;
                console.log(theData);
                $("#enterUsername").append(`<h3>You search for ${data.user}</h3>`);
                for (let i in  theData){
                    console.log(theData[i]);
                    $("#enterUsername").append(`<a name="repoLink" data-repo="${theData[i].repos_url}" href="#">${theData[i].login}</a>`);
                }    
        });

    });

    $('body').on('click', (event) => {//click event for when an element on the body is clicked
        event.preventDefault();
        console.log(event.target.name);//visual rep of the element that was clicked
        if (event.target.name === "repoLink"){//if the event.target.name = repoLink = the string repo
            console.log($(event.target).attr("data-repo"));
            updateServerWithRepo($(event.target).attr("data-repo"));
        }
    });

    function updateServerWithRepo(repos){
        $.ajax({
            url: '/set-repo',
                method: 'POST',
                data:{
                    repos: repos
                }
            })
            .then((data) =>  {
                window.location.href = "/repos";
            });
    }


    $('#commitLink').on('click', (event) => {//click event for when an element on the body is clicked
        event.preventDefault();
        console.log("hello");//visual rep of the element that was clicked
        if (event.target.id === "commitLink"){//if the event.target.name = repoLink = the string repo
            // console.log($(event.target).attr("data-graph"));
            updateServerWithCommits($(event.target).attr("data-link"));
        }
    });

    function updateServerWithCommits(commits){
        console.log("i am here top");
        $.ajax({
            url: '/set-commits',
                method: 'POST',
                data:{
                    commitsInfo: commits
                }
            })
            .then((data) =>  {
                console.log("i am here")
                window.location.href = "/graph";
            });
    }



});



