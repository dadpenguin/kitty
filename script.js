


// init vars
let latestX = 0;
let latestY = 0;
let current_x = 0;
let current_y = 0;
let interval = 5;
let holding_flower = false;



// anim status

let anim_changed = 0;

/*
1 = down
2 = up
3 = left
4 = right

*/

// init character pos
const character = document.querySelector(".character");
const spritesheet = document.querySelector(".kitty");
spritesheet.className = "idle pixelart kitty";




















// main routine


document.addEventListener('click', function(event) {
  if (document.querySelectorAll('.flower_element').length < 1) {
    // creating the div
    const image = document.createElement('div');
    image.classList.add('flower_element');

    // flower pos var
    const latestX = event.clientX;
    const latestY = event.clientY;

    // moving the flower to the pos of the click
    image.style.left = latestX + 'px';
    image.style.top = latestY + 'px';

    document.body.appendChild(image);

    // find total flowers
    let total_flowers = document.querySelectorAll('.flower_element').length;



    const character = document.querySelector(".character");

    playBackgroundMusic()
    

    // left or right



    if (current_x < latestX) {

      move_right()

    }
    else {

      move_left()

    }









    function move_right() {
      let move_x = setInterval(function() {
        if (current_x < (latestX - 40)) {
          current_x += 1;
          character.style.left = current_x + "px";
          change_anim(4)
        }
        else {
          remove_anim()
          up_or_down()
          clearInterval(move_x)
        }
      }, interval)
    }

    function move_left() {
      let move_x = setInterval(function() {
        if (current_x > (latestX - 40)) {
          current_x -= 1;
          character.style.left = current_x + "px";
          change_anim(3)
        }
        else {
          remove_anim()
          up_or_down()
          clearInterval(move_x)

        }
      }, interval)
    }



    // up or down
    function up_or_down() {
      let findflower = document.querySelector('.flower_element');

      if (current_y < latestY) {
        findflower.style.zIndex = 3;

        // z index of flower turn to 3
        move_down()
      } else {
        // z index of flower turn to 1
        findflower.style.zIndex = 1;
        move_up()
      }
    }

    function move_down() {
      let move_y = setInterval(function() {
        if (current_y < (latestY - 100)) {
          current_y += 1;
          character.style.top = current_y + "px";
          change_anim(1)
        }
        else {
          removeFlowers()
          playSound()
          remove_anim()
          clearInterval(move_y)

        }
      }, interval)
    }

    function move_up() {
      let move_y = setInterval(function() {
        if (current_y > (latestY - 50)) {
          current_y -= 1;
          character.style.top = current_y + "px";
          change_anim(2)
        }
        else {
          removeFlowers()
          playSound()
          remove_anim()
          clearInterval(move_y)

        }
      }, interval)
    }


  }
});





// anim handler
function change_anim(direction) {


  const spritesheet = document.querySelector(".kitty");

  if (direction == 1 && anim_changed == 0) {
    spritesheet.className = "spritesheet face_front pixelart kitty";
    anim_changed = 1;

  }

  else if (direction == 2 && anim_changed == 0) {
    spritesheet.className = "spritesheet face_back pixelart kitty";
    anim_changed = 1;

  }

  else if (direction == 3 && anim_changed == 0) {
    spritesheet.className = "spritesheet face_left pixelart kitty";
    anim_changed = 1;

  }

  else if (direction == 4 && anim_changed == 0) {
    spritesheet.className = "spritesheet face_right pixelart kitty";
    anim_changed = 1;

  }

}








function playSound() {
  const audio = document.createElement('audio');
  audio.src = 'pick_flower.opus';
  audio.play();
}


function playBackgroundMusic() {
  const audio = document.getElementById("bgMusic");
  audio.loop = true;
  audio.volume = 0.1;
  audio.play();
}







function remove_anim() {

  const spritesheet = document.querySelector(".kitty");


  spritesheet.className = "idle pixelart kitty";
  anim_changed = 0;
}















// remove the flowers
function removeFlowers() {
  let flowers = document.querySelectorAll('.flower_element');
  flowers.forEach(flower => flower.remove());

}