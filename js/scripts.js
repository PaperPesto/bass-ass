$('document').ready(function () {

    const note_naturali = [
        'C', 'D', 'E', 'F', 'G', 'A', 'B'
    ];

    const note_diesis = [
        'C\u266F', 'D\u266F', 'F\u266F', 'G\u266F', 'A\u266F'
    ];

    const note_bemolle = [
        'D\u266D', 'E\u266D', 'G\u266D', 'A\u266D', 'B\u266D'
    ];

    let i = 0;
    let metronomo = null;

    $('.start-metronomo').click(() => {

        const bpm = $('#bpm')[0].value;
        const ripetizione = $('#ripetizione')[0].value;
        const difficolta = $("input[name='difficolta']:checked").val();
        console.log('start metronomo', bpm);
        console.log('difficoltà', difficolta);

        metronomo = setInterval(() => {
            executeBeat(ripetizione, difficolta);
        }, 60 / bpm * 1000);

        $('.start-metronomo').attr('disabled', 'disabled');
        $('.stop-metronomo').removeAttr('disabled');
    });


    $('.stop-metronomo').click(() => {
        clearInterval(metronomo);

        $('#counter').text('');
        $('.stop-metronomo').attr('disabled', 'disabled');
        $('.start-metronomo').removeAttr('disabled');

        i = 0;
    });

    function executeBeat(ripetizione, difficolta) {

        const beat = i % ripetizione;
        const audio = new Audio('resources/MetroBeat1.wav');

        audio.play();
        $('#counter').text(beat+1);
       
        if (beat === 0 || i === 0) {
            console.log('prossima nota');
            let randomNota = getRandomNota(difficolta);
            $('#nota').text(randomNota);
        }

        i++;
    }

    function getRandomNota(difficolta){

        let note_array = [];

        if(difficolta){
            switch(difficolta){
                case 'naturali':
                    note_array = note_naturali;
                    break;
                case 'diesis':
                    note_array = note_naturali.concat(note_diesis);
                    break;
                case 'bemolle':
                    note_array = note_naturali.concat(note_bemolle);
                    break;
                case 'tutte':
                    note_array = note_naturali.concat(note_diesis).concat(note_bemolle);
                    break;
                default:
                    note_array = note_naturali.concat(note_diesis).concat(note_bemolle);
                    break;
            }
        } else {
            note_array = note_naturali.concat(note_diesis).concat(note_bemolle);
        }

        let rnd = Math.random()*note_array.length;
        let rnd_round = Math.round(rnd);

        console.log('rnd', rnd_round);

        return note_array[rnd_round];
    }

});