let change = "idel"
 const down = document.getElementById('animations')

 down.addEventListener('change', function (e) {
      change = e.target.value;
 })


const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
 playerImage.src = 'shadow_dog.png';
 const spriteWidth = 575;
 const spriteHieght = 523;

 let gameframe = 0;
 const staggerframes = 4;
 const animetionFrames = [];


 const animetionstatus = [
    { name : "idel",
      frames : 7  

    },

    { name : "jump",
      frames : 7
    },
    
    { name : "fall",
      frames : 7
    },
    
    { name : "run",
      frames : 9
    },
    
    { name : "dizzy",
      frames :11
    },
    
    { name : "fly",
      frames : 5
    },
    
    { name : "roll",
      frames : 7
    },
    
    { name : "ko",
      frames : 7
    },
    
    { name : "ta",
      frames : 12
    },
    
    { name : "ov",
      frames : 4
    },
    
 ];

 animetionstatus.forEach((state, index)=>{
    let frames = {
      loc : [],
    }
    
    for (let j = 0; j < state.frames; j++) {
      let positionX = j*spriteWidth
      let positionY = index*spriteHieght

        frames.loc.push({
          x : positionX,
          y : positionY 
        });

  
       animetionFrames[state.name] = frames;
       
    } 
    
  })
  
  console.log(animetionFrames);
  
    


function animation () {
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  // ctx.fillRect(50,50,100,100);
  // ctx.drawImage(playerImage,0, 0)
  
  let position = Math.floor(gameframe/staggerframes) % animetionFrames[change].loc.length;
  let frameX = spriteWidth * position;
  let frameY = animetionFrames[change].loc[position].y
  
  // console.log(position);
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHieght, 0, 0, spriteWidth, spriteHieght);
 
  
  
  
  
  
  
  // if (gameframe % staggerframes == 0) {
    
  //     if (frameX < 6){
    //         frameX++
    //     } else {
      //         frameX = 0;
      
      //     }
      
      // }
      
      
      gameframe++;
      
      requestAnimationFrame(animation);
    };
    
    animation()
    
    