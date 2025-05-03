function displayFields(form, customHTML) {
  var usuarioAtual = getValue("WKUser"); // Obtém o usuário logado
  var atividadeCorrente = getValue("WKNumState"); // Obtém a atividade atual do workflow

  // Definição dos usuários responsáveis
  var anamnese = "maria.silva"; // Login da anamnese
  var fisico = "academy.matheus.aurelio" // Login do avaliador fisico
  var profissional = "academy.aurelio.matheus"; // Login do gestor/aprovador
  
  // FASE 1 Bloqueia os campos de solicitação se o usuário não for o anamnese
  if (usuarioAtual == anamnese) {
    // avaliação fisica
    form.setEnabled("altura", false);
    form.setEnabled("peso", false);
    form.setEnabled("imc", false);
    form.setEnabled("fc", false);
    form.setEnabled("pa", false);
    //avaliação profissional 
    form.setEnabled("dp", false);
    form.setEnabled("pas", false);
    form.setEnabled("encaminhamento", false);
    form.setEnabled("obs", false);
  }

  // FASE 2 Bloqueia os campos de solicitação se o usuário não for o fisico
  if (usuarioAtual == fisico) {
    // anamnese
    form.setEnabled("nome", false);
    form.setEnabled("rg", false);
    form.setEnabled("cpf", false);
    form.setEnabled("data_nascimento", false);
    form.setEnabled("idade", false);
    form.setEnabled("genero", false);
    form.setEnabled("estado_civil", false);
    form.setEnabled("telefone", false);
    form.setEnabled("email", false);
    form.setEnabled("cep", false);
    form.setEnabled("bairro", false);
    form.setEnabled("logradouro", false);
    form.setEnabled("numero", false);
    form.setEnabled("descricao_doenca", false);
    form.setEnabled("atividade_fisica", false);
    form.setEnabled("doenca_cronica", false);
    form.setEnabled("cirurgia", false);
    form.setEnabled("medicamentos", false);
    form.setEnabled("alergia", false);
    form.setEnabled("atividade_fisica", false);
    form.setEnabled("estresse_radio", false);
    form.setEnabled("qualidade_sono", false);
    form.setEnabled("bebida_alcoolica", false);
    form.setEnabled("fumar", false);
    form.setEnabled("queixa", false);
    form.setEnabled("objetivo_consulta", false);
    form.setEnabled("observacao_adc", false);
    form.setEnabled("termo_consentimento", false);
    form.setEnabled("assinatura", false);
    form.setEnabled("habitos_alimentares", false);
    //avaliação profissional 
    form.setEnabled("dp", false);
    form.setEnabled("pas", false);
    form.setEnabled("encaminhamento", false);
    form.setEnabled("obs", false);
  }

// FASE 3 Bloqueia os campos de solicitação se o usuário não for o profissional
  if (usuarioAtual == profissional) {
    // anamnese
    form.setEnabled("nome", false);
    form.setEnabled("rg", false);
    form.setEnabled("cpf", false);
    form.setEnabled("data_nascimento", false);
    form.setEnabled("idade", false);
    form.setEnabled("genero", false);
    form.setEnabled("estado_civil", false);
    form.setEnabled("telefone", false);
    form.setEnabled("email", false);
    form.setEnabled("cep", false);
    form.setEnabled("bairro", false);
    form.setEnabled("logradouro", false);
    form.setEnabled("numero", false);
    form.setEnabled("descricao_doenca", false);
    form.setEnabled("atividade_fisica", false);
    form.setEnabled("doenca_cronica", false);
    form.setEnabled("cirurgia", false);
    form.setEnabled("medicamentos", false);
    form.setEnabled("alergia", false);
    form.setEnabled("atividade_fisica", false);
    form.setEnabled("estresse_radio", false);
    form.setEnabled("qualidade_sono", false);
    form.setEnabled("bebida_alcoolica", false);
    form.setEnabled("fumar", false);
    form.setEnabled("queixa", false);
    form.setEnabled("objetivo_consulta", false);
    form.setEnabled("observacao_adc", false);
    form.setEnabled("termo_consentimento", false);
    form.setEnabled("assinatura", false);
    form.setEnabled("habitos_alimentares", false);
    // avaliação fisica
    form.setEnabled("altura", false);
    form.setEnabled("peso", false);
    form.setEnabled("imc", false);
    form.setEnabled("fc", false);
    form.setEnabled("pa", false);
    
  }

}

