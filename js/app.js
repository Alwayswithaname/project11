$(document).foundation();


localStorage.setItem("value1", 123);
localStorage.setItem("value2", "abc");
localStorage.setItem("state", JSON.stringify({ a: 1, b: 2, c: 3 }));



var playerEl = document.querySelector("#player")
var videoId = document.querySelector("#characterId")
var buttonLink1 = document.querySelector("#comics")
var buttonLink2 = document.querySelector("#cartoon")
var buttonLink3 = document.querySelector("#movie")
var buttonLink4 = document.querySelector("#song")
var buttonLink5 = document.querySelector("#games")
var ironmanBtn = document.querySelector("#ironmanVideo")
var spidermanBtn = document.querySelector("#spidermanVideo")
var hulkBtn = document.querySelector("#hulkVideo")
var drBtn = document.querySelector("#drVideo")

    

         
         
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
                height: '240',
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
            playThisVideo("bCBMKIm8z08") // ironman
         })
        // movies
         buttonLink3.addEventListener("click", function() {
            console.log("click")
            playThisVideo("baf7iJW3Rv4") // ironman
         })
        // songs
         buttonLink4.addEventListener("click", function() {
            console.log("click")
            playThisVideo("jNo3zmhXE9Y") // ironman
         })
        // games
         buttonLink5.addEventListener("click", function() {
            console.log("click")
            playThisVideo("vcTN_3Ncvvo") // ironman
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
         function   hulkChecker() {
         // comics
            buttonLink1.addEventListener("click", function() {
               console.log("click")
               playThisVideo("JuRA_BKDmOs") // hulk
                })
         // cartoons
            buttonLink2.addEventListener("click", function() {
               console.log("click")
               playThisVideo("u3NxKggj0gQ") // hulk
                })
         // movies
            buttonLink3.addEventListener("click", function() {
               console.log("click")
               playThisVideo("6wy1FFE8Gjk") // hulk
                })
         // songs
            buttonLink4.addEventListener("click", function() {
               console.log("click")
               playThisVideo("Dj26N10Ymlg") // hulk
                })
         // games
            buttonLink5.addEventListener("click", function() {
               console.log("click")
               playThisVideo("S0R2CvHpkig") // hulk
                })
                }
         function   drChecker() {
         // comics
            buttonLink1.addEventListener("click", function() {
               console.log("click")
               playThisVideo("ThiV6FfB3_o") // dr Strange
               })
         // cartoons
            buttonLink2.addEventListener("click", function() {
               console.log("click")
               playThisVideo("u3NxKggj0gQ") // dr Strange
               })
         // movies
            buttonLink3.addEventListener("click", function() {
               console.log("click")
               playThisVideo("c4J5ivvR6Uo") // dr Strange
               })
         // songs
            buttonLink4.addEventListener("click", function() {
               console.log("click")
               playThisVideo("Tocl53YXn-0") // dr Strange
               })
         // games
            buttonLink5.addEventListener("click", function() {
               console.log("click")
               playThisVideo("PwjOoNRimaI") // dr Strange
               })
               }       
   


         window.onload = function() {
            playThisVideo("os2C0TdDphc")
         }

         ironmanBtn.addEventListener("click", function() {
            console.log("click")
            ironmanChecker();
            playThisVideo("8vgvAYXVCbE")
         })

         spidermanBtn.addEventListener("click", function() {
            console.log("click")
            spidermanChecker();
            playThisVideo("aA1KHo6nc-0")
         })

         hulkBtn.addEventListener("click", function() {
            console.log("click")
            hulkChecker();
            playThisVideo("6Jsq_dxxS4s")
         })

         drBtn.addEventListener("click", function() {
            console.log("click")
            drChecker();
            playThisVideo("7jHHw6-j9MY")
         })

         

