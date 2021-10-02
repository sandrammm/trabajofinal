exam.onscroll =function() {

    
    if(document.documentElement.scrollTop > 100){

        document.querySelector('.go')
        .classList.add('show');
    }

      else{
        document.querySelector('.go')
        .classList.remove('show');
      }  
    
}