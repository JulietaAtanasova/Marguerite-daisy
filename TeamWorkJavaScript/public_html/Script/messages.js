var messages = ['PAUSE','LEVEL COMPLETED','GAME OVER'];
var gameStory = '<p><img src="IMG/pesho.png"/></p><p><strong>Pesho </strong>has always been dreaming about two things: to play football like Cristiano Ronaldo and to code like Svetlin Nakov.</p> <p>Now he is footballer in the powerful bulgarian football club <strong>"Gigant (Belene)"</strong>.</p> <p>After this great success, Pesho is ready to walk in the footsteps of his other idol - Nakov. He wants to be a student at<strong> SoftUni</strong>.</p><p>Can you help him to become a programmer?</p>';
var howTo = '<h1 class="howToPlay">How To Play<h1>' + '<h2 class="collect">collect:&nbsp;&nbsp;</h2><p class="shap1"><img src="IMG/cSharp.png" />&nbsp;<img src="IMG/html5.png" />&nbsp;<img src="IMG/eclipse.png" /></p> <h2 class="avoid">avoid:</h2><p class="shap"><img src="IMG/planeta-tv.png" />&nbsp;<img src="IMG/blonde-girl.png" />&nbsp;<img src="IMG/beer.png" />&nbsp;&nbsp;&nbsp;<img src="IMG/2048.png" /></p>' + '<img class="upKeys" src="IMG/Up.jpg" alt=""/><p class="move"> - To move Pesho please tab <br/> Up, Down, Left, Right</p>';
var about = ['This game is developed from students at Software University.', 'Developers: ', 'Julieta Atanasova', 'Stoyanka Nikiforova', 'Vladislav Hadzhiyski', 'Yuliyan Kostov', ' ', '&copy;2014'];

function getMessage (index){
    $(function () {
        $.get('message.html', function (data) {
            $('#msg').html(data);
            $('#msg').text(index);
        });
    });
}

function getStory(index){
    $(function () {
        $.get('message.html', function (data) {
            $('#gameStory').html(data);
            $('#gameStory').html(index);
        });
    });
}

function getHowToPlay(index){
    $(function () {
        $.get('message.html', function (data) {
            $('#howToPlay').html(data);
            $('#howToPlay').html(index);
        });
    });
}

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
}