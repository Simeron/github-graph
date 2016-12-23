$(() => {

    /**
    * This code talks to the graph.ejs file to diplay the graph which shows the commit information I want to be displayed on the graph
    * @param data,
    */

    $.ajax({
        url: '/commits', //where it is pulling the commit information from
        method: 'GET'
    })
        .then((data) => {
            console.log(data);
            let x = [];
            let y = []; //empty arrays allows me to pull in the objects which are below

            var layout = {
                title: 'Your commit history',
                xaxis: {
                    title: 'Commit date'
                }
            };

            for (var i = 0; i < data.length; i++) {
                y.push(data[i].commitDate);
                x.push(data[i].commitMessage); //loops through information and plots the points on the graph
            }
            console.log(x);
            console.log(y);
            var trace1 = {
                x: x,
                y: y, 
                type: 'scatter'
            };
            var dataInfo = [trace1];

            Plotly.newPlot('myDiv', dataInfo);

        });


});



