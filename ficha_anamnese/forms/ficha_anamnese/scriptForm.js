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
  // pega o valor (.value) digitado no input cep.
  // (replace(/\D/g, '')) remove tudo que não for número 

  var url = "https://viacep.com.br/ws/"+cep+"/json"; //armazena o conteudo do site/api viacep
    $.ajax({ // chamada AJAX
      url: url, // acessa a URL da API
      type: "get", // usa tipo GET (obter)
      dataType: "json", // tipo json
      success: function(dados){
        console.log(dados)
        document.getElementById("bairro").value = dados.bairro
        document.getElementById("logradouro").value = dados.logradouro
      }
    })
}

// Função consultaCep, serve para autopreenchimento,
// quando o usuario preencher o cep no input os campos bairro
//  e logradoura será preenchido através da API ViaCEP.