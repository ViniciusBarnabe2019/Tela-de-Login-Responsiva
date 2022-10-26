const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("senha")
const spanEmail = document.getElementsByClassName('span_email')[0]
const spanSenha = document.getElementsByClassName('span_senha')[0]

inputEmail.addEventListener('focus', ()=> {
	spanEmail.style.backgroundColor = '#58D68D'
	spanEmail.style.borderColor = '#58D68D'
	spanEmail.style.boxShadow = '0 0 0 0.1em #58D68D'
})

inputEmail.addEventListener('blur', () => {
  spanEmail.style.backgroundColor = '#e9ecef';
  spanEmail.style.borderColor = '#e9ecef'
  spanEmail.style.boxShadow = 'none'
})

inputSenha.addEventListener('focus', ()=> {
	spanSenha.style.backgroundColor = '#58D68D'
	spanSenha.style.borderColor = '#58D68D'
	spanSenha.style.boxShadow = '0 0 0 0.1em #58D68D'
})

inputSenha.addEventListener('blur', () => {
  spanSenha.style.backgroundColor = '#e9ecef';
  spanSenha.style.borderColor = '#e9ecef'
  spanSenha.style.boxShadow = 'none'
})