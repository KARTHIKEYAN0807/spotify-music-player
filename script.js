window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeading.textContent = "Deep Focus";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "images/image.png");
        bannerHeading.textContent = "Deep Focus";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/image 1.png");
            bannerHeading.textContent = "Kangal Edho";
            bannerText.textContent = "Dhibu Ninan Thomas, Na";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/b02.png)";
            bannerImage.setAttribute("src", "images/image 2.png");
            bannerHeading.textContent = "Neelorpam";
            bannerText.textContent = "Abby V & Shruthika Samudhrala,Anirudh Ravichander";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/b03.png)";
            bannerImage.setAttribute("src", "images/image 3.png");
            bannerHeading.textContent = "Aasa Kooda";
            bannerText.textContent = "Sai Abhyankkar, Sai Smriti";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/b04.png)";
            bannerImage.setAttribute("src", "images/image 4.jpg");
            bannerHeading.textContent = " Kadharalz";
            bannerText.textContent = "Anirudh Ravichander";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/b05.png)";
            bannerImage.setAttribute("src", "images/image 5.png");
            bannerHeading.textContent = "Achacho";
            bannerText.textContent = "Hiphop Tamizha, Kharesma Ravichandran, Srinisha Jayaseelan";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b06.png)";
            bannerImage.setAttribute("src", "images/image 6.png");
            bannerHeading.textContent = "Illuminati";
            bannerText.textContent = "Sushin Shyam,Vinayak Sasikumar";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b07.png)";
            bannerImage.setAttribute("src", "images/image 7.png");
            bannerHeading.textContent = "Nira";
            bannerText.textContent = "Malvi Sundaresan, Sid Sriram, Gautham Vasudev Menon, Nivas K.Prasanna";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b08.png)";
            bannerImage.setAttribute("src", "images/image 8.png");
            bannerHeading.textContent = "Unakku Thaan";
            bannerText.textContent = "Santhosh Narayanan, Dhvani Kailas";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b09.png)";
            bannerImage.setAttribute("src", "images/image 9.png");
            bannerHeading.textContent = "Come Back Indian";
            bannerText.textContent = "Anirudh Ravichander";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b010.png)";
            bannerImage.setAttribute("src", "images/image 10.png");
            bannerHeading.textContent = "Lokiverse 2.0";
            bannerText.textContent = "Anirudh Ravichander";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}