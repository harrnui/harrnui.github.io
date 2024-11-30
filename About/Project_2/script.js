const focusedSegment = document.querySelector('focused-segment');
const blurredBackground = document.querySelector('.blurred-background');
const blur1 = document.getElementById('blur1');
const blur2 = document.getElementById('blur2');
const blur3 = document.getElementById('blur3');
const blur4 = document.getElementById('blur4');

const jumbotron1 = document.getElementById('jumbotron1')
const jumbotron2 = document.getElementById('jumbotron2');
const jumbotron3 = document.getElementById('jumbotron3');
const jumbotron4 = document.getElementById('jumbotron4');

const vizija = document.getElementById('vizija')
const misija = document.getElementById('misija')
const vrijednosti = document.getElementById('vrijednosti')
const chart = document.getElementById('chart')



blur1.addEventListener('mouseover', () => {
    vizija.style.backgroundColor = 'orange';
    jumbotron1.style.backgroundColor = 'orange';
    jumbotron1.style.boxShadow = '20px 20px 0px 0px';
    vizija.style.boxShadow = '20px 20px 0px 0px'
});

blur2.addEventListener('mouseover', () => {
    misija.style.backgroundColor = 'orange';
    jumbotron2.style.backgroundColor = 'orange';
    jumbotron2.style.boxShadow = '20px 20px 0px 0px';
    misija.style.boxShadow = '20px 20px 0px 0px'
});

blur3.addEventListener('mouseover', () => {
    vrijednosti.style.backgroundColor = 'orange';
    jumbotron3.style.backgroundColor = 'orange';
    jumbotron3.style.boxShadow = '20px 20px 0px 0px';
    vrijednosti.style.boxShadow = '20px 20px 0px 0px'
});

blur4.addEventListener('mouseover', () => {
    chart.style.backgroundColor = 'orange';
    jumbotron4.style.backgroundColor = 'orange';
    jumbotron4.style.boxShadow = '20px 20px 0px 0px';
    chart.style.boxShadow = '20px 20px 0px 0px'
});

/*blur1.addEventListener('mouseover', ()=>{
    
    console.log("It works");
    blur1.style.filter = 'blur(0px)';
    blur2.style.filter = 'blur(10px)';
    blur3.style.filter = 'blur(10px)';
    blur4.style.filter = 'blur(10px)';
    
});



blur2.addEventListener('mouseover', ()=>{
    
    console.log("It works");
    blur1.style.filter = 'blur(10px)';
    blur2.style.filter = 'blur(0)';
    blur3.style.filter = 'blur(10px)';
    blur4.style.filter = 'blur(10px)';
    
});


blur3.addEventListener('mouseover', ()=>{
    
    console.log("It works");
    blur1.style.filter = 'blur(10px)';
    blur2.style.filter = 'blur(10px)';
    blur3.style.filter = 'blur(0px)';
    blur4.style.filter = 'blur(10px)';

});

blur4.addEventListener('mouseover', ()=>{
    
    console.log("It works");
    blur1.style.filter = 'blur(10px)';
    blur2.style.filter = 'blur(10px)';
    blur3.style.filter = 'blur(10px)';
    blur4.style.filter = 'blur(0px)';
    
});
*/

