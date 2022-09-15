$(document).foundation();



var playerEl = document.querySelector("#player")
var videoId = document.querySelector("#characterId")
var buttonLink1 = document.querySelector("#comics")
var buttonLink2 = document.querySelector("#cartoon")
var buttonLink3 = document.querySelector("#movie")
var buttonLink4 = document.querySelector("#song")
var buttonLink5 = document.querySelector("#games")
var ironmanBtn = document.querySelector("#ironmanVideo")
var spidermanBtn = document.querySelector("#spidermanVideo")

    

         
         
         // 2. This code loads the IFrame Player API code asynchronously.
          var tag = document.createElement('script');
    
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
          // 3. This function creates an <iframe> (and YouTube player)
          //    after the API code downloads.
          var player;
          function onYouTubeIframeAPIReady() {
            
          }
    
          // 4. The API will call this function when the video player is ready.
          function onPlayerReady(event) {
            event.target.playVideo();
          }
    
          // 5. The API calls this function when the player's state changes.
          //    The function indicates that when playing a video (state=1),
          //    the player should play for six seconds and then stop.
          var done = false;
          function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
              setTimeout(stopVideo, 600000);
              done = true;
            }
          }
          function stopVideo() {
            player.stopVideo();
          }

          function playThisVideo(vidid) {
            if(player){
                player.destroy();
              }
            player = new YT.Player('player', {
                height: '250',
                width: '480',
                videoId: vidid,
                playerVars: {
                  'playsinline': 1
                },
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
              });
          }

    
        function   ironmanChecker() {
        // comics
          buttonLink1.addEventListener("click", function() {
            console.log("click")
            playThisVideo("K_I4XPH9zUg") // ironman
         })
        // cartoons
         buttonLink2.addEventListener("click", function() {
            console.log("click")
            playThisVideo("zZG27hmi0YY") // ironman
         })
        // movies
         buttonLink3.addEventListener("click", function() {
            console.log("click")
            playThisVideo("clkKD3gFPAo") // ironman
         })
        // songs
         buttonLink4.addEventListener("click", function() {
            console.log("click")
            playThisVideo("TxtvogVepSg") // ironman
         })
        // games
         buttonLink5.addEventListener("click", function() {
            console.log("click")
            playThisVideo("UJa1Gm1Qlvg") // ironman
         })
         }

         function   spidermanChecker() {
            // comics
              buttonLink1.addEventListener("click", function() {
                console.log("click")
                playThisVideo("mLcgMOSylC8") // spiderman
             })
            // cartoons
             buttonLink2.addEventListener("click", function() {
                console.log("click")
                playThisVideo("zZG27hmi0YY") // spiderman
             })
            // movies
             buttonLink3.addEventListener("click", function() {
                console.log("click")
                playThisVideo("clkKD3gFPAo") //spiderman
             })
            // songs
             buttonLink4.addEventListener("click", function() {
                console.log("click")
                playThisVideo("TxtvogVepSg") //spiderman
             })
            // games
             buttonLink5.addEventListener("click", function() {
                console.log("click")
                playThisVideo("UJa1Gm1Qlvg") // spiderman
             })
             }

         window.onload = function() {
            playThisVideo("os2C0TdDphc")
         }

         ironmanBtn.addEventListener("click", function() {
            console.log("click")
            ironmanChecker();
            playThisVideo("fY7kIbkmnpc&t")
         })

         spidermanBtn.addEventListener("click", function() {
            console.log("click")
            spidermanChecker();
            playThisVideo("fY7kIbkmnpc&t")
         })

         hulkBtn.addEventListener("click", function() {
            console.log("click")
            spidermanChecker();
            playThisVideo("fY7kIbkmnpc&t")
         })

         blackpantherBtn.addEventListener("click", function() {
            console.log("click")
            spidermanChecker();
            playThisVideo("fY7kIbkmnpc&t")
         })

         captinmarvelBtn.addEventListener("click", function() {
            console.log("click")
            spidermanChecker();
            playThisVideo("fY7kIbkmnpc&t")
         })