let typeWriterEffect = document.getElementById('type-writer'); 
let typerInterval = setInterval(function(){
   typerWriter();    
}, 500); 

function typerWriter() {
   if(typeWriterEffect.classList.contains('hidden')) {
        typeWriterEffect.classList.remove('hidden');
    }
    else {
        typeWriterEffect.classList.add('hidden');
    }
    


}

