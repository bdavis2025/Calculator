var currentNumber = 1;
var num1;
var num2;

var $screen = $("#screen");
var $number = $(".number");

//when someone clicks on a number, it
//saves the number to do the math

$number.on('click', function() {
    var numberPressed = $(this).html();
    $screen.append(numberPressed);

    if (currentNumber == 1) {
        if (num1 == null) {
          num1 = numberPressed;  
        } else {
        num1 = num1 + numberPressed;
        }
    }
        
    if (currentNumber == 2) {
        if (num2 == null) {
            num2 = numberPressed;
        } else {
            num2 = num2 + numberPressed;
        }
    }
});


       $("#plus").on('click', function()
            {
                $screen.append("+");
                op = "+";
                currentNumber++;
            })

            $("#minus").on('click', function ()
                {
                    $screen.append("-");
                    op = "-";
                    currentNumber++;
                })

                $("#multiply").on('click', function()
                    {
                        $screen.append("x");
                        op = "x";
                        currentNumber++;
                    })

                    $("#divide").on('click', function()
                        {
                            $screen.append("/");
                            op = "/";
                            currentNumber++;
                        })

        $("#clear").on('click', function()
        {
            $screen.empty();
            num1 = null;
            num2 = null;
            currentNumber = 1;
        });

                       $("#equal").on('click', function()
                            {
                                $screen.append("=");
                                console.log(num1, num2);
                                num1 = parseInt(num1);
                                num2 = parseInt(num2);
                                console.log(num1, op, num2);
                                    if  (op == "+") {
                                        answer = num1 + num2;
                                    }
                                    if (op == "-") {
                                        answer = num1 - num2;
                                    }
                                    if (op == "x") {
                                        answer = num1 * num2;
                                    }
                                    if (op == "/") {
                                        answer = num1 / num2;
                                    }
                                    $screen.append(answer);
                                    num1 = 11;
                                    num2 = 11;
                            })