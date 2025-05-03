function validateForm(form) {
  let email = form.getValue("email");
  let isValid = true;

  // Validação de campo vazio
  if (email === "" || email === null) {
    FLUIGC.toast({
      title: 'EMAIL INCORRETO: ',
      message: 'O campo email precisa ser preenchido',
      type: 'danger'
    });
    isValid = false;
  }
  
  // Validação de formato (só verifica se não estiver vazio)
  let validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !validacao.test(email)) {
    FLUIGC.toast({
      title: 'EMAIL INVÁLIDO: ',
      message: 'Preencha um endereço de email válido',
      type: 'danger'
    });
    isValid = false;
  }

  return isValid;
}