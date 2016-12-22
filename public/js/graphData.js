$(() => {

    $.ajax({
        url: '/commits',
        method: 'GET'
    })
        .then((data) => {
            console.log(data);
            let x = [];
            let y = [];

            var layout = {
                title: 'Your commit history',
                xaxis: {
                    title: 'Commit date'
                }
            };

            // for (i in data.length) {
            //     console.log("hello "+i);
            // };

            for (var i = 0; i < data.length; i++) {
                y.push(data[i].commitDate);
                x.push(data[i].commitMessage);
            }
            console.log(x);
            console.log(y);
            var trace1 = {
                x: x,
                y: y, //data.commitMessage
                type: 'scatter'
            };
            var dataInfo = [trace1];

            Plotly.newPlot('myDiv', dataInfo);

        });


});



