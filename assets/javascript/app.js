window.onload = function() {

    var time = 31;
    var intervalId;
    var correct = 0;
    var incorrect = 4;
    var converted = timeConverter(time);

    function showQuestions() {
        var q = {
            question0: "<h3>Find Jay Z's classic album</h3>",
            answers0: ["The Kingdom", "Late  Registration", "The Carter", "The BluePrint"],
            values0: ["inc", "inc", "inc", "blueprint", ],
            question1: "<h3>Who does not fit?</h3>",
            answers1: ["Dr Dre", "Snoop Dogg", "Eazy-E", "Ice Cube"],
            values1: ["inc", "snoop", "inc", "inc", ],
            question2: "<h3>This rap legend appeared in several films including 'Poetic Justice', 'Juice', and 'Above the Rim'.</h3>",
            answers2: ["Kendrick Lamar", "2Pac", "Method Man", "50 Cent"],
            values2: ["inc", "2pac", "inc", "inc", ],
            question3: "<h3>Recorded the top selling hip-hop album of all time.</h3>",
            answers3: ["Eminem", "Notorious BIG", "Wu-Tang", "Outkast"],
            values3: ["inc", "inc", "inc", "Outkast", ]
        }

        $("#questionsDiv").append("<div id='firstQuestion'>" + q.question0)
        for (var i = 0; i < 4; i++) {
            $("#questionsDiv").append("<input type='radio' name='answer-0' value='" + q.values0[i] + "'>" + q.answers0[i])
        }

        $("#questionsDiv").append("<br><br> <div id='secondQuestion'>" + q.question1)
        for (var i = 0; i < 4; i++) {
            $("#questionsDiv").append("<input type='radio' name='answer-1' value='" + q.values1[i] + "'>" + q.answers1[i])
        }

        $("#questionsDiv").append("<br><br> <div id='thirdQuestion'>" + q.question2)
        for (var i = 0; i < 4; i++) {
            $("#questionsDiv").append("<input type='radio' name='answer-2' value='" + q.values2[i] + "'>" + q.answers2[i])
        }

        $("#questionsDiv").append("<br><br> <div id='fourthQuestion'>" + q.question3)
        for (var i = 0; i < 4; i++) {
            $("#questionsDiv").append("<input type='radio' name='answer-3' value='" + q.values3[i] + "'>" + q.answers3[i])
        }
    }

    function count() {
        time--
        var converted = timeConverter(time);
        $("#clock").html(converted)
        console.log(converted);

        if (time === 0) {
            stop();
            var blueprint = $('input[value="blueprint"]').attr("name", "answer-0")
            var snoop = $('input[value="snoop"]').attr("name", "answer-1")
            var pac = $('input[value="2pac"]').attr("name", "answer-2")
            var outkast = $('input[value="Outkast"]').attr("name", "answer-3")
            var answerArray = [blueprint, snoop, pac, outkast];
            var imageSrc = ["The_Blueprint.png","Snoop.jpg","2Pac.jpg","Outkast.jpg", ]
            for (var i = 0; i < answerArray.length; i++) {
                if (answerArray[i].is(':checked')) {
                    correct++;
                    incorrect--;
                }
            }
            $("#questionsDiv").empty();
            $("#main-screen").css("opacity", 1)
            $("#scoreboard").append("<div> correct answers:" + correct + "</div>" +
                "<div> incorrect answers: " + incorrect + "</div>");

            for (var i = 0; i < imageSrc.length; i++){ 
            	$("#questionsDiv").append("<img class='answerImage' src='assets/images/" + imageSrc[i] + "'>");
            }

        }
    };

    function start() {
        intervalId = setInterval(count, 1000);
        var converted = timeConverter(time);
        console.log(time)
    };

    function stop() {
        clearInterval(intervalId);
    };

    function playAudio() {
        var song = $("#questionsDiv").append("<audio autoplay src='assets/audio/boondocks.mp3'></audio>");
    }

    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    };

    $("#click-start").on("click", function() {
        $(".click-start").remove();

        start();
        setTimeout(showQuestions, 1000);
        playAudio();
    });

}