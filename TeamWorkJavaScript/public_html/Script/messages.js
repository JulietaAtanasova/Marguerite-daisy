var messages = ['PAUSE','LEVEL COMPLETED','GAME OVER'];

function getMessage (index){
    $(function () {
        $.get('message.html', function (data) {
            $('#msg').html(data);
        });
    });
};