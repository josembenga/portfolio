function validacao(){

    if(document.getElementById('name_user').value ===''){
        //mostrar o erro 
        // add a classe erro
        errorValidation(name_user,'Qual é o seu nome?')
      } else{
        //add classe de sucesso
        successValidation(name_user)
      }
     if(document.getElementById('email').value ===''){
        //mostrar o erro 
        // add a classe erro
        errorValidation(email,'Insira um e-mail válido')

      } else{
        //add classe de sucesso
        successValidation(email)
      }
      if(document.getElementById('sms').value ===''){
        //mostrar o erro 
        // add a classe erro
        errorValidation(sms,'Escreva a sua mensagem')
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


  
// const form = document.getElementById('form')
// const  name_user= document.getElementById('name_user')
// const email = document.getElementById('email')
// const pass = document.getElementById('pass')
// const passtwo = document.getElementById('passtwo')

// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   pegarInputs()
// })
// function pegarInputs(){
//   const name_userValue=name_user.value.trim()
//   const emailValue=email.value.trim()
//   const passValue=pass.value.trim()
//   const passtwoValue=passtwo.value.trim()

//   if(name_userValue ===''){
//     //mostrar o erro 
//     // add a classe erro
//     errorValidation(name_user,'Preencha esse campo')
//   } else{
//     //add classe de sucesso
//     successValidation(name_user)
//   }
//   if(emailValue===''){
//     errorValidation(email,'Preencha esse campo')
//   }else{
//     successValidation(email)
//   }
  
//   if(passValue===''){
//     errorValidation (pass,'Preencha esse campo' )
//   }else if (passValue.length<8){
//     errorValidation(pass,'A senha deve ter no mínimo 8 caracteres')
//   }else{
//     successValidation(pass)
//   }
//   if(passtwoValue===''){
//     errorValidation(passtwo,'Preencha esse campo')
//   }else if(passtwoValue !== passValue){
//     errorValidation(passtwo,'Senha incorreta')
//   }else{
//     successValidation(passtwo)
//   }
// }

// function errorValidation(input, message){
//   const controlForm = input.parentElement;
//   const small=controlForm.querySelector('small')
//   small.innerText=message
//   controlForm.className='control-form error' 
// }

// function successValidation(input){
//   const controlForm = input.parentElement;
//   controlForm.className='control-form success'
// }
