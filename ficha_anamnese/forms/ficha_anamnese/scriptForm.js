function mostrarCampo(id, mostrar) {
  document.getElementById(id).style.display = mostrar ? 'block' : 'none';
}

	// Preenche automaticamente a data atual no campo data_assinatura
	document.addEventListener('DOMContentLoaded', function() {
  const hoje = new Date().toISOString().split('T')[0];
	document.getElementById('data_assinatura').value = hoje;
});

function toggleCollapse(id) {
var content = document.getElementById(id);
content.classList.toggle('active');
}

function consultaCep() {
  var cep = document.getElementById('cep').value.replace(/\D/g, '');
  var url = "https://viacep.com.br/ws/" + cep + "/json";

  $.ajax({
    url: url,
    type: "get",
    dataType: "json",
    success: function(dados) {
      if (dados.erro) {
        FLUIGC.toast({
          title: 'CEP INCORRETO: ',
          message: 'CEP não encontrado. Verifique e tente novamente.',
          type: 'danger'
          });
        //exibirMensagemErro("CEP não encontrado. Verifique e tente novamente.");
        return;
      }

      document.getElementById("bairro").value = dados.bairro;
      document.getElementById("logradouro").value = dados.logradouro;

      // Nenhuma mensagem de sucesso será exibida
    },
    error: function() {
      exibirMensagemErro("Erro ao buscar o CEP. Tente novamente mais tarde.");
    }
  });
}

function exibirMensagemErro(texto) {
  const divMensagem = document.getElementById("mensagem-cep");

  divMensagem.innerHTML = `
    <div class="alert alert-danger" role="alert">
      <font>${texto}</font>
    </div>
  `;

  // Remove a mensagem de erro após 3 segundos
  setTimeout(() => {
    divMensagem.innerHTML = "";
  }, 3000);
}

// Função consultaCep, serve para autopreenchimento,
// quando o usuario preencher o cep no input os campos bairro
//  e logradoura será preenchido através da API ViaCEP.


function calculaIMC() {
  const alturaInput = document.getElementById("altura");
  const pesoInput = document.getElementById("peso");
  const imcInput = document.getElementById("imc");

  // esse if verifica a existencia dos iputs no DOM (ex: campo dinamico ou aba não carregada) esse if evita esse erro 
  if (alturaInput && pesoInput && imcInput) {
    const altura = parseFloat(alturaInput.value.replace(",", ".")); //substituição
    const peso = parseFloat(pesoInput.value.replace(",", "."));

// esse if verifica se os valores dos inputs são validos e altura maior que 0
    if (!isNaN(altura) && !isNaN(peso) && altura > 0) {
      const imc = peso / (altura * altura);
      imcInput.value = imc.toFixed(2); // arredonda para 2 casas decimais
    }
  }
}

// Chama o cálculo sempre que o campo peso ou altura mudar
document.addEventListener("DOMContentLoaded", function () {
  const alturaInput = document.getElementById("altura");
  const pesoInput = document.getElementById("peso");

  if (alturaInput) {
    alturaInput.addEventListener("blur", calculaIMC);
  }

  if (pesoInput) {
    pesoInput.addEventListener("blur", calculaIMC);
  }
});
