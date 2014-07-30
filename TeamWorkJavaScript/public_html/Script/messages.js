var messages = ['PAUSE','LEVEL COMPLETED','GAME OVER'];

function getMessage (index){
    $(function () {
        $.get('message.html', function (data) {
            $('#msg').html(data);
            $('#msg').text(index);
        });
    });
};

var about = 'This game is developed from students at Software University. Developers:...';

function getAboutInfo(index){
    $(function () {
        $.get('message.html', function (data) {
            $('#aboutInfo').html(data);
            $('#aboutInfo').text(index);
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