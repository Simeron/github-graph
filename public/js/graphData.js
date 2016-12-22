$(() => {

    $.ajax({
        url: '/commits',
        method: 'GET'
    })
        .then((data) => {
            console.log(data);
            
        });

});