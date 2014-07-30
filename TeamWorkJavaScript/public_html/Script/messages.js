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
            $('#aboutInfo').html(data);
            $('#aboutInfo').text(index);
        });
    });
};