console.log("Welcome to Spotify");

// Variables Declare

let songindex = 1;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let slider = document.getElementById('slider');
let next = document.getElementById('next')
let songitem = Array.from(document.getElementsByClassName('songitem'));
let pre = document.getElementById('pre');
let nex= document.getElementById('nex');
let gif = document.getElementById('gif');
let songname = document.getElementById('songname');
let songinfo = document.getElementById('songinfo');
let mastersongname = document.getElementById('mastersongname');
  
let songs = [
    
        {songname: "Kabira",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
        {songname: "Khudgarz Official",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
        {songname: "Rabba Mer Kari",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
        {songname: "Naina da Kya ",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
        {songname: "Kali kali zulfo ",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
        {songname: "Pehla Pehla Pyar",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
        {songname: "Ek tarfa",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
        {songname: "Chand Baliya",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    ] 

    songitem.forEach((element,i)=> {
         element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    })



  // Handle play/pause

masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
         audioelement.play(); 
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-circle-pause');
         gif.style.opacity = 1;

         
         
    }

    else if(audioelement.played){
        audioelement.pause();
        masterplay.classList.add('fa-play-circle');
         masterplay.classList.remove('fa-circle-pause');
         gif.style.opacity = 0;
    }
})




// Time and Slider Update

audioelement.addEventListener('timeupdate',()=>{
     progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
     slider.value = progress;
})
slider.addEventListener('change',()=>{
audioelement.currentTime= (slider.value*audioelement.duration)/100;
})



// Individual Song Play Button Event

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        songindex = parseInt(e.target.id);
        audioelement.src = `songs/${songindex}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

 // Next Song Play Button

nex.addEventListener('click',()=>{
    if(songindex>8){
        songindex = 0;
    }
    else{
     songindex = songindex+1;
     
    }

    audioelement.src = `songs/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-circle-pause');

})

 // Previous Song Play Button

pre.addEventListener('click',()=>{
    if(songindex<=0){
        songindex = 0;
    }
    else{
     songindex = songindex-1;

    }

    audioelement.src = `songs/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-circle-pause');

})

 // Play/Pause By Space

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        if(audioelement.paused || audioelement.currentTime<=0){
            audioelement.play();  
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
   
             }
   
         else if(audioelement.played){
           audioelement.pause();
           masterplay.classList.add('fa-play-circle');
            masterplay.classList.remove('fa-circle-pause');
            gif.style.opacity = 0;
       }
    }
  })


    // Privious Song By Left Arrrow
        
    // document.addEventListener('keyup', event => {
    //     if (event.code === 'ArrowRight') {
    //         if(songindex<=0){
    //             songindex = 0;
    //         }
    //         else{
    //          songindex = songindex-1;
    //         }
        
    //         audioelement.src = `songs/${songindex}.mp3`;
    //         audioelement.currentTime = 0;
    //         audioelement.play();
    //         masterplay.classList.remove('fa-play-circle');
    //         masterplay.classList.add('fa-circle-pause');
    //     }
    //   })

      
    // // // Next Song By Right Arrrow

    //   document.addEventListener('keyup', event => {
    //     if (event.code === 'ArrowLeft') {
    //         if(songindex>8){
    //             songindex = 0;
    //         }
    //         else{
    //          songindex = songindex+1;
    //         }
        
    //         audioelement.src = `songs/${songindex}.mp3`;
    //         audioelement.currentTime = 0;
    //         audioelement.play();
    //         masterplay.classList.remove('fa-play-circle');
    //         masterplay.classList.add('fa-circle-pause');
        
    //     }
    //   })

    

    



