var bpI = $('input[value="bpI"]')
var snoop = $('input[value="snoop"]')
var bustabus = $('input[value="bustabus"]')
var puff = $('input[value="puff"]')
var answerArray = [bpI, snoop, bustabus, puff];

for (var i = 0; i < answerArray.length; i++){
	if(answerArray[i].is(':checked')){
		correct++;
		incorrect--;
	}
}

if (time === 0) {
                stop();
                if()

                if ($('input[value="bpI"]').is(':checked')) {
                    correct++;
                    incorrect--;

                }

                if ($('input[value="snoop"]').is(':checked')) {
                    correct++
                    incorrect--;

                }

                if ($('input[value="bustabus"]').is(':checked')) {
                    correct++;
                    incorrect--;

                }
                if ($('input[value="puff"]').is(':checked')) {
                    correct++;
                    incorrect--;
                }


                $("#questionsDiv").empty();
                $("#scoreboard").append("<div> correct answers:" + correct + "</div>" +
                    "<div> incorrect answers: " + incorrect + "</div>");
            }