$('document').ready(function () {



    $('.genera-cuori').click(() => {
        console.log('genear cuori');

        setInterval(()=>{
            let posx = 50;
            let posy = 50;
                      
            $('#cuori-container').append('<img style="width: 30px; height: 30px;" class="cuore" src="resources/cuore.png" alt="" />');
        }, 15);

        

        //$('.cuore').prop('hidden', true);


    });

});