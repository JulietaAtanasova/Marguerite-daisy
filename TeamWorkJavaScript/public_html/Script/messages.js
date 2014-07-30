var messages = ['PAUSE','LEVEL COMPLETED','GAME OVER', 'YOU WIN!', 'YOU LOSE'];

function getMessage (index){
    $(function () {
        $.get('message.html', function (data) {
            $('#msg').html(data);
            $('#msg').text(index);
        });
    });
};

var about = ['This game is developed from students at Software University.', 'Developers: ', 'Julieta Atanasova', 'Stoyanka Nikiforova', 'Vladislav Hadzhiyski', 'Yuliyan Kostov', ' ', '&copy;2014'];

function getAboutInfo(index){
    $(function () {
        $.get('message.html', function (data) {
            $('#aboutInfo').html(data);
            var text = "";
            for (var i = 0; i < index.length; i++) {
                if((i === 1)||(i === index.length-1)){
                    text += "<p><strong>" + index[i] + '</strong></p>';
                } else {
                    text += "<p>" + index[i] + '</p>';
                }
            }
            $('#aboutInfo').html(text);
        });
    });
};

var howTo = 'Some text or animation...';

function getHowToPlay(index){
    $(function () {
        $.get('message.html', function (data) {
            $('#howToPlay').html(data);
            $('#howToPlay').text(index);
        });
    });
};

var gameStory = 'Pesho is a football player, but he dreams to be programmer. He wants to be student at SoftUni. Can you help him to become programmer?';

function getStory(index){
    $(function () {
        $.get('message.html', function (data) {
            $('#gameStory').html(data);
            $('#gameStory').text(index);
        });
    });
};