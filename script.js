var slides = [];
var currentSlideIndex = 0;

var submited = document.getElementById("sub");//target submit button.
title = document.querySelector("#title");//target title
points = document.querySelectorAll(".points")//target all points
buttons = document.querySelector("#btns");//target sub and pre buttons
editBtn = document.querySelector("#edit");//target edit button
present = document.getElementById("pre");//target present button
leftButton = document.getElementById("left");
rightButton = document.getElementById("right");

function getvalues(){
    var values = [];
    points.forEach(function(point){
        values.push(point.value);

    });
    return values;
}//extract all the values of points

function setValue(title, pointsArray){
    var slide = { 
        title: title.value,
        points: pointsArray
    }//create and store the slide as object with a string -> title and array of points 
    slides.push(slide);// push the slide into slides
    currentSlideIndex++;
    console.log(slides);
}

function updateValue(currentSlideIndex, title, editedValues){
    slides[currentSlideIndex].title = title.value;
    var index = 0;
       slides[currentSlideIndex].points.forEach(function(index){
        index.value = editedValues[index];
        console.log(index.value);
       })
    console.log(slides);
}

function clear(){
    points.forEach(function(point){
    point.value = "";
    })
}

function display(ci){
    title.value = slides[ci].title;// display the 1st slide's title
   var index = 0;
   //display the points frome the slides[currentIndex]
   points.forEach(function(point,index){
     point.value = slides[ci].points[index];
    //  index = index + 1;                        
    });  
    console.log(slides[ci]);
}
//Function to Execute when the Submit Button is Clicked & while eiting
submited.addEventListener('click', function(){

    var pointsArray = getvalues();//store the values of points as array
    
   //&& Object.keys(slides[currentSlideIndex]).length === 0
    if(currentSlideIndex === slides.length){
        setValue(title, pointsArray);
        title.value = ""; //set title empty
        
        clear();
        
    }
    //edit/update the slide value;
    else{
        // editedValues = getvalues();
        updateValue(currentSlideIndex,title, pointsArray);

    }
    
}) 



//when present
present.addEventListener('click',() => {
   
    buttons.style.display = "none";//hide the sub and pre buttons

    editBtn.style.display = "block";//display edit button

    var currentPoints = getvalues();// to save the existing slides points
    if(currentSlideIndex === slides.length){
        setValue(title, currentPoints);
    }
    //save the slide in the slides Array.
    else{
        updateValue(currentSlideIndex, title, currentPoints);
    }
    currentSlideIndex = 0;
    display(currentSlideIndex);

});


editBtn.addEventListener('click',()=>
{    
    editBtn.style.display = "none";
    
    buttons.style.display = "flex";


});

leftButton.addEventListener('click',() => {
    console.log(currentSlideIndex);
    if(currentSlideIndex > 0){
        currentSlideIndex--;
        display(currentSlideIndex);
    }

});

rightButton.addEventListener('click', ()=> {
    console.log(currentSlideIndex);
    console.log(slides.length);
    if(currentSlideIndex < (slides.length - 1)){
        console.log(currentSlideIndex);
        console.log(slides.length)
        currentSlideIndex++;
        display(currentSlideIndex);
    }
})