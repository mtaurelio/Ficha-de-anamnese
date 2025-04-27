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