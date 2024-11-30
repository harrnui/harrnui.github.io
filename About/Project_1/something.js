const picture1 = document.getElementsByClassName('slide1');
const picture2 = document.getElementsByClassName('slide2');
const picture3 = document.getElementsByClassName('slide3');


const styleSheets = document.styleSheets;


console.log(styleSheets+ "THIS IS IT ");

let slika1;
let slika2;
let slika3;

for (let i = 0; i < styleSheets.length; i++) {
  const rules =  styleSheets[i].cssRules;

  for (let j = 0; j < rules.length; j++) {
    const rule = rules[j];

    if (rule.selectorText === '#slika1') {
        // Found the desired ruleset
        slika1 = rule;
      }
  }
}

for (let i = 0; i < styleSheets.length; i++) {
    const rules =  styleSheets[i].cssRules;
  
    for (let j = 0; j < rules.length; j++) {
      const rule = rules[j];
  
      if (rule.selectorText === '#slika2') {
          // Found the desired ruleset
          slika2 = rule;
        }
    }
  }

  for (let i = 0; i < styleSheets.length; i++) {
    const rules =  styleSheets[i].cssRules;
  
    for (let j = 0; j < rules.length; j++) {
      const rule = rules[j];
  
      if (rule.selectorText === '#slika3') {
          // Found the desired ruleset
          slika3 = rule;
        }
    }
  }


console.log(slika1);



const body = document.body;



function animation() {
    const scrollPosition = window.scrollY
     // Use window.scrollY for more compatibility

  // Define animation logic based on scroll position (adjust as needed)
    if (scrollPosition == 0 ) { // Picture 1 is visible
        slika1.style.animation = 'appear 1.5s linear';
    
    //picture2.style.animation = ''; // Reset animation for others
    //picture3.style.animation = '';
        console.log("animation triggered 1");
    }
    if (scrollPosition >= 100 && scrollPosition <= 200) {
    // Picture 2 is visible
        slika2.style.animation = 'appear 1.5s linear';
    //picture1.style.animation = '';
    //picture3.style.animation = '';
        console.log("animation triggered 2");
    } 
    if(scrollPosition >= 200) {
    // Picture 3 is visible
        slika3.style.animation = ' appear 1.5s linear';
    //picture1.style.animation = '';
    //picture2.style.animation = '';
        console.log("animation triggered 3");
    }

    
}



// Add event listener to body once
window.onscroll = function (){animation()};

