function validation(){

    if(document.getElementById('name_user').value ===''){
        //mostrar o erro 
        // add a classe erro
        errorValidation(name_user,'What is your name?')
      } else{
        //add classe de sucesso
        successValidation(name_user)
      }
     if(document.getElementById('email').value ===''){
        //mostrar o erro 
        // add a classe erro
        errorValidation(email,'Enter a valid email')

      } else{
        //add classe de sucesso
        successValidation(email)
      }
      if(document.getElementById('sms').value ===''){
        //mostrar o erro 
        // add a classe erro
        errorValidation(sms,'Please write your message')
   return false
      } else{
        //add classe de sucesso
        successValidation(sms)
      }
    }

function errorValidation(input, message){
    const controlForm = input.parentElement;
    const small=controlForm.querySelector('small')
    small.innerText=message
    controlForm.className='control-form error' 
  }
  
  function successValidation(input){
    const controlForm = input.parentElement;
    controlForm.className='control-form success'
  }

