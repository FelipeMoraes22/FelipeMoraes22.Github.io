document.getElementById('basicForm').addEventListener('submit', function(event) {
  event.preventDefault();

  
// Obtém os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const sobrenome = document.getElementById('sobrenome').value.trim();
  const email = document.getElementById('email').value.trim();

  // Validação de campos obrigatórios
  if (!nome || !sobrenome || !email) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    
    retur
return;
  }

  // Exibe mensagem de confirmação
  const confirmacao = confirm(
    `Por favor, confirme seus dados:\n\nNome: ${nome}\nSobrenome: ${sobrenome}\nE-mail: ${email}\n\nEstá tudo correto?`
  );

  // Redireciona o usuário se ele confirmar
  if (confirmacao) {
    window.location.href ="../pages/introducao.html";
  }
});