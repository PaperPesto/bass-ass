$('document').ready(function () {

    const note_naturali = [
        'C', 'D', 'E', 'F', 'G', 'A', 'B'
    ];

    const note_diesis = [
        'C#', 'D#', 'F#', 'G#', 'A#'
    ];

    const note_bemolle = [
        'Db', 'Eb', 'Gb', 'Ab', 'Bb'
    ];

    let i = 0;
    let metronomo = null;

    $('.start-metronomo').click(() => {

        const bpm = $('#bpm')[0].value;
        const ripetizione = $('#ripetizione')[0].value;
        console.log('start metronomo', bpm);

        metronomo = setInterval(() => {
            executeBeat(ripetizione);
        }, 60 / bpm * 1000);

        $('.start-metronomo').attr('disabled', 'disabled');
        $('.stop-metronomo').removeAttr('disabled');
    });


    $('.stop-metronomo').click(() => {
        clearInterval(metronomo);

        $('.stop-metronomo').attr('disabled', 'disabled');
        $('.start-metronomo').removeAttr('disabled');

        i = 0;
    });

    function executeBeat(ripetizione) {
        const audio = new Audio('resources/MetroBeat1.wav');
        audio.play();
       
        if (i % ripetizione === 0 || i === 0) {
            console.log('prossima nota');
            let randomNota = getRandomNota();
            $('#nota').text(randomNota);
        }

        i++;
    }

    function getRandomNota(){
        const note_array = note_naturali.concat(note_diesis).concat(note_bemolle);
        let rnd = Math.random()*note_array.length;
        let rnd_round = Math.round(rnd);

        console.log('rnd', rnd_round);

        return note_array[rnd_round];
    }

});