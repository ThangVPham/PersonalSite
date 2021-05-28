$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=82b4f0f4d84768ff85d0be9a4be2ee39",function(data){

    console.log(data);
    
    var icon = data.weather[0].icon;
    if(icon == "01d"){
        $('.icon').attr('src', "WeatherIcons/sunny.png")
    }
    else if(icon == "01n"){
        $('.icon').attr('src', "WeatherIcons/clearsky-night.png")
    }
    else if(icon == "10d" || icon =="10n"){
        $('.icon').attr('src', "WeatherIcons/chancerain.png")
    }
    else if(icon == "11d" || icon =="11n"){
        $('.icon').attr('src', "WeatherIcons/chancetstorms.png")
    }
    else{
        $('.icon').attr('src', "http://openweathermap.org/img/wn/"+icon+"@2x.png");
    }
   
    console.log(icon);
    var temp = data.main.temp;
    $('.temperature').append(Math.round(temp)+"°C");
    var desc = data.weather[0].description.toUpperCase();
    $('.desc').append(desc);
    $('.desc').attr('style','font-size:10px;');
    var location = data.name.toUpperCase();
    $('.location').append(location);
    $('.location').attr('style','font-size:10px;');
})



/*Hamburger menu trigger*/
var count =0;
function onClickMenu(){ 
    if (count == 0){
        displayBg();
        setTimeout(displayMenu,800);
        count = 1;
    }
    else{
        displayMenu();
        displayBg();
        count =0;
    }     
}
function displayBg(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}
function displayMenu(){
    document.getElementById("nav").classList.toggle("change");
}
/*----------------------------------------*/

/*Randomizing Quotes*/
function quotes(){
    var number = Math.floor(Math.random()*4);

    if (number == 0){
        document.getElementById("quote").innerHTML="-The only difference between a good day and a bad day is your attitude.";
    }
    else if(number == 1){
        document.getElementById("quote").innerHTML="-Change your thoughts and you'll change your world.";
    }
    else if(number == 2){
        document.getElementById("quote").innerHTML="-Doubt kills more dreams than failure ever will.";
    }
    else if(number == 3){
        document.getElementById("quote").innerHTML="-Mistakes are proof that you're trying.";
    }
    else if(number == 4){
        document.getElementById("quote").innerHTML="-Your attitude, not your aptitude, will determine your altitude.";
    }
}


/*------------------------------*/
