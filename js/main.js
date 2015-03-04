$( document ).ready(function() {

    //Initializing clock
    var t = setInterval(function(){
        
                var d = new Date();
                if(d.getHours()>9){
                    var hour = d.getHours();
                } else {
                    var hour = "0"+d.getHours();
                }

                if(d.getMinutes()>9){
                    var min = d.getMinutes();
                } else {
                    var min = "0"+d.getMinutes();
                }

                if(d.getSeconds()>9){
                    var second = d.getSeconds();
                } else {
                    var second = "0"+d.getSeconds();
                }

                var time = hour + ":" + min + ":" + second;
               
                $('.time').text(time);

                //Setting off the alarm
                if(d.getHours() === hourCounter && d.getMinutes() === minCounter && activateTarget) {
                    $("div.box").css("opacity","1");
                    $("div.box-draggable").css("opacity","0.8");
                }

            },1000);

    //Add event handler to listen for drag event by declaring a boolean that enables itself when setting the alarm
    //and diables itself once the target has been hit
    var activateTarget = false;

    //Generating a random number from 1 to 10 for hit area
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var randomNumber = getRandomInt(1, 10);

    //Setting up the hit area
    var alarmBtn = $("label#alarmBtn"),
        timeBtn = $("label#timeBtn"),
        setHourBtn = $("label#setHourBtn"),
        setMinBtn = $("label#setMinBtn");

    //initialize disable clicking for setting alarm
    document.getElementById("setmin").disabled = true;
    document.getElementById("sethour").disabled = true;

    alarmBtn.click(function(){
        $("label#alarmBtn").removeClass("active2");
        $("label#timeBtn").removeClass("active");
        $("label#setHourBtn").removeClass("active");
        $("label#setMinBtn").removeClass("active");
        $("label#timeBtn").addClass("active");

        $("label#alarmBtn").removeClass("translate-animation");
        $("label#timeBtn").removeClass("translate-animation"); 
        //disable clicking for setting alarm
        document.getElementById("setmin").disabled = true;
        document.getElementById("sethour").disabled = true;
        //resetting alarm view
        $('.time').css("opacity", "1");
        $('.alarm').css("opacity", "0");
        setHourTrue = false;
        setMinTrue = false;
        $("div.hour").removeClass("time-deactive");
        $("div.min").removeClass("time-deactive");
        $("div.second").removeClass("time-deactive");
        $("div.wrapper").css("border", "5px solid #F02ED3");
        activateTarget = true; // reactivate the target hit to listen for event
        randomNumber = getRandomInt(1, 10); // re-initialize the random number for target hitting
    });

    timeBtn.click(function(){
        $("label#alarmBtn").removeClass("active2");
        $("label#timeBtn").removeClass("active");
        $("label#alarmBtn").addClass("active2");
        $("label#setHourBtn").addClass("active");
        $("label#setMinBtn").addClass("active");

        $("label#alarmBtn").addClass("translate-animation");
        $("label#timeBtn").addClass("translate-animation");
        // document.getElementById("alarmBtn").style.webkitTransform = "translate(-81px, 0px)";
        // document.getElementById("timeBtn").style.webkitTransform = "translate(-81px, 0px)";
        // document.getElementById("alarmBtn").style.setProperty("-webkit-transition", "-webkit-transform 5s ease-in");
        // document.getElementById("timeBtn").style.style.setProperty("-webkit-transition", "-webkit-transform 5s ease-in");

        //disable clicking for setting alarm
        document.getElementById("setmin").disabled = false;
        document.getElementById("sethour").disabled = false;
        //setting alarm view
        $('.time').css("opacity", "0");
        $('.alarm').css("opacity", "1");
        setHourTrue = true;
        $("div.hour").removeClass("time-deactive");
        $("div.min").addClass("time-deactive");
        $("div.second").addClass("time-deactive");
        $("div.wrapper").css("border", "5px solid #9160A1");
    });

    setHourBtn.click(function(){
        $("label#setHourBtn").removeClass("active");
        $("label#setMinBtn").addClass("active");
        setHourTrue = false;
        setMinTrue = true;
        $("div.hour").addClass("time-deactive");
        $("div.min").removeClass("time-deactive");
        $("div.second").addClass("time-deactive");
    });

    setMinBtn.click(function(){
        $("label#setHourBtn").addClass("active");
        $("label#setMinBtn").removeClass("active");
        setHourTrue = true;
        setMinTrue = false;
        $("div.hour").removeClass("time-deactive");
        $("div.min").addClass("time-deactive");
        $("div.second").addClass("time-deactive");
    });

    //Set Alarm

    $('.hour').text("00:");
    $('.min').text("00:");

    var hourCounter = 0,
        minCounter = 0,
        hourOutput = 0,
        minOutput = 0,
        alarmClick = $("div.alarm"),
        setHour = $("div.hour"),
        setMin = $("div.min"),
        setHourTrue = false,
        setMinTrue = false;

    //disables the target hit box in the event that user sets the alarm again without disarming
    alarmClick.click(function(){
        if(activateTarget) {
            $("div.box").css("opacity","0");
            $("div.box-draggable").css("opacity","0");
        }
    });

    setHour.click(function(){
        
        if(setHourTrue) {
            hourCounter++;
            
            if (hourCounter < 10) {
                hourOutput = "0" + hourCounter + ":";
            }else if(hourCounter > 23){ 
                hourCounter = 0;
                hourOutput = "0" + hourCounter + ":";
            } else {
                hourOutput = hourCounter + ":";
            }

            $('div.hour').text(hourOutput);
        }
    });

    setMin.click(function(){

        if(setMinTrue){
            minCounter++;
            
            if (minCounter < 10) {
                minOutput = "0" + minCounter + ":";
            }else if(minCounter > 59){ 
                minCounter = 0;
                minOutput = "0" + minCounter + ":";
            } else {
                minOutput = minCounter + ":";
            }

            $('div.min').text(minOutput);
        }
    });

    $('div.second').text("00");

    //Dragging code

    var droppables = $(".box-draggable");
    var target = $(".box");
    var overlapThreshold = "85%"; 
    function onDrop(dragged, dropped) {
      TweenMax.fromTo(dropped, 0.1, {opacity:1}, {opacity:0, repeat:3, yoyo:true});
    }

    //initialize target box with draggable box to enable interactions
    Draggable.create([droppables,target], {
        bounds:$("div.constrain-wrapper"),
        dragResistance: 0,
        cursor: "pointer",
        onDrag: function(e) {
            var i = target.length;
            while (--i > -1) {
                if (this.hitTest(target[i], overlapThreshold)) {
                    $(target[i]).addClass("highlight");
                    if (i === randomNumber) {
                        $("div.box").css("opacity","0");
                        $("div.box-draggable").css("opacity","0");
                        activateTarget = false;
                        console.log("true"); //check whether the right target has been hit
                    }
                } else {
                    $(target[i]).removeClass("highlight");
                }
            }
        },
        onDragEnd:function(e) {
            var i = droppables.length;
            while (--i > -1) {
                if (this.hitTest(droppables[i], overlapThreshold)) {
                    onDrop(this.target, droppables[i]);
                }
            }
        }
    });

    //disable movement of target box
    Draggable.create(target, {
        bounds:$("div.constrain-wrapper"),
        dragResistance: 1,
        cursor: "arrow",
        zIndexBoost : false
    });

});