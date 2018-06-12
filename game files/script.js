// CONTINUE ON'

// Global Variables
let sceneImg = ["url('image/intro.png')", "url('image/day1.png')", "url('image/day1intro.png')", "url('image/day2intro.png')", "url('image/badend.png')", "url('image/day1be.png')", "url('image/retry.png')", "url('image/demoend.png')"];
let day1Text = [">> Press enter to progress the story.", "This is a work of fiction. Names, characters, businesses, places, events, locales, and incidents are either the products of the author's imagination or used in a fictitious manner.", "Any resemblance to actual persons, living or dead, or actual events is purely coincidental", "With that said, have fun with this visual novel.", "> ....", "> What happened...?", "You can only hear the sound of dripping water, opening your eyes, you were greeted by darkness.", "You attempted to make sense of your environment despite not being able to see anything.", "It seems like you are trapped in a really small space, and you can barely move around.", "You start to wonder what happened and how you got trapped in the first place.", "I mean, what else can you do than to try to remember why you're stuck here in the first place?", "selection"];
let selectionTxt = ["Try to remember", "Attempt to escape", "Scream"];
let selInput1 = [">> Day 1.", "You closed your eyes, trying to recall your past.", "You remember the light, the outdoors and it's beauty. The smell of fresh air mixed with the grass under your very own feet.", "You remember your friends, and how you were all hanging out when a man approached you, warning everyone about how the world is ending and an apocalypse is coming.", "You remember laughing at the warning with your friends, and thinking about how absurb that idea was.", "What you all didn't realize is the fact that the warning was real.", "The memories of everything falling a part came back to you, you were at your apartment when it all happened.", "You were about to head out for the day until the building started shaking, everything started to break and fall apart", "You remember the feeling of falling down, you remember the feeling of the fear of dying", "You remember the pain hitting your back like you were being stabbed, but worse, and you blacked out.", ".....", "....", "...", ">> Day 2.", "-> Creator here, thank you for playing the demo of my first made from scratch game!", "-> Sadly I have 50 other things to work on when it comes to summer time, so I'm not quite sure when I will be able to actually make the full game.", "-> But hey, I do plan on finishing this eventually! Just not sure when haha-", "-> See you folks in the future!"];
let selInput2 = ["You attempted to move around more, using your arms and legs, you tried to push forward.", "The wall-like structure in front of you started to move, soon you felt like you had more space.", "You could feel the gush of air as you succesfully got out of the place that you were previously trapped in.", "Looking around you noticed that everything around you was still dark, you tried walking forward", "After taking a few steps you see what seems like 2 red lights glowing in the dark.", "You stepped closer to it.", ".....", "....", "...", ">>BAD END", "space"];
let selInput3 = ["You shouted from the top of your lungs.", "An echo follows over your scream, then the silence looms back to you.", "You start to think that shouting is probably not the best idea.", "After what seems like hours of silence, you hear rustling noices.", "Hope starts swell in your heart that someone may rescue you.", "You start shouting for help again", ".....", "....", "...", ">>BAD END", "space"];

let index = 0;
let indexs1 = 0;
let indexs2 = 0;
let indexs3 = 0;
let indeximg = 0;


// Add Event Listener
$("#new").on("click", newg);
//$("#save").on("click", save);
//$("#load").on("click", load);
//$("#txtload").on("click", txtload);
// Event Functions

// function save() {
//    localStorage.setItem("index", index.toString());
//    localStorage.setItem("indeximg", indeximg.toString());
//}

//function load() {
//    index = Number(localStorage.getItem("index"));
//   $("#visual").css("background-image", sceneImg[indeximg]);
//    $("#textBox").html(day1Text[index]);
//   $("#textBox").show();
//   $("#file").hide();
//    $("body").on("keypress", enter);
//    $("#menu").show();
//}

//function txtload() {
//   index = Number(localStorage.getItem("index"));
//  $("#visual").css("background-image", sceneImg[indeximg]);
//  $("#textBox").html(day1Text[index]);
//  $("#textBox").show();
//   $("#file").hide();
//  $("body").on("keypress", enter);
//  $("#menu").show();
//}

function newg() {
    $("#textBox").show();
    //$("#menu").show();
    $("#file").hide();
    $("#visual").css("background-image", sceneImg[0]);
    $("body").on("keypress", enter);
    $("#textBox").html(day1Text[index]);
}

function enter() {
    index++;
    console.log(index)
    $("#textBox").html(day1Text[index]);
    //$("#menu").show();
    if (index == 4) {
        $("#visual").css("background-image", sceneImg[1]);
        indeximg++;
    }
    if (index == 11) {
        $("#selection").show();
        //$("#menu").hide();
        $("body").off("keypress", enter);
        $("#btn1").html(selectionTxt[0]);
        $("#btn1").one("click", remember);
        $("#btn2").html(selectionTxt[1]);
        $("#btn2").one("click", move);
        $("#btn3").html(selectionTxt[2]);
        $("#btn3").one("click", shout);
        $("#textBox").hide();
    }
}

function remember() {
    $("#selection").hide();
    $("#textBox").show();
    $("#textBox").html(selInput1[0]);
    $("body").on("keypress", ens1);
    if (indexs1 == 0) {
        $("#visual").css("background-image", sceneImg[2]);
        indeximg + 2;
    }

}

function ens1() {
    indexs1++;
    console.log(indexs1);
    $("#textBox").html(selInput1[indexs1]);
    if (indexs1 == 1) {
        $("#visual").css("background-image", sceneImg[1]);
        indeximg++;
    }
    if (indexs1 == 13) {
        $("#visual").css("background-image", sceneImg[3]);
        indeximg + 3;
    }
    if (indexs1 == 14) {
        $("#visual").css("background-image", sceneImg[7]);
    }
    if (indexs1 == 18) {
        $("#retry").show();
        $("body").off("keypress", ens1);
        $("#retry").on("click", ret);
        $("#textBox").hide();
    }
}

function move() {
    indexs2++;
    $("#selection").hide();
    $("#textBox").show();
    $("#textBox").html(selInput2[0]);
    $("body").on("keypress", ens2);
}

function ens2() {
    indexs2++;
    $("#textBox").html(selInput2[indexs2]);
    if (indexs2 == 4) {
        $("#visual").css("background-image", sceneImg[5]);
    }
    if (indexs2 == 9) {
        $("#visual").css("background-image", sceneImg[4]);
        indeximg + 4;
    }
    if (indexs2 == 10) {
        $("#retry").show();
        $("#visual").css("background-image", sceneImg[6]);
        $("body").off("keypress", ens2);
        $("#retry").on("click", ret);
        $("#textBox").hide();
    }
}


function shout() {
    indexs3++;
    $("#selection").hide();
    $("#textBox").show();
    $("#textBox").html(selInput3[0]);
    $("body").on("keypress", ens3);
}

function ens3() {
    indexs3++;
    $("#textBox").html(selInput3[indexs3]);

    if (indexs3 == 9) {
        $("#visual").css("background-image", sceneImg[4]);
        indeximg + 4;
    }
    if (indexs3 == 10) {
        $("#retry").show();
        $("#visual").css("background-image", sceneImg[6]);
        $("body").off("keypress", ens3);
        $("#retry").on("click", ret);
        $("#textBox").hide();
    }
}

function ret() {
    index = 0;
    indexs1 = 0;
    indexs2 = 0;
    indexs3 = 0;
    indeximg = 0;
    $("#textBox").show();
    //$("#menu").show();
    $("#file").hide();
    $("#visual").css("background-image", sceneImg[0]);
    $("body").on("keypress", enter);
    $("#textBox").html(day1Text[0]);
    $("#retry").hide();
}
