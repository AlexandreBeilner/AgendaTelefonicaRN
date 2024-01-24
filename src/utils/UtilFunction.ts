export const phoneMask = (value: string) => {
  if (!value) return ""; // Se o valor for vazio ou nulo, retorna uma string vazia.

  value = value.replace(/\D/g, ""); // Remove todos os caracteres que não são dígitos.

  value = value.replace(/(\d{2})(\d)/, "+$1($2"); // Adiciona o código de país e abre parênteses após os dois primeiros dígitos.

  value = value.replace(/(\d{2})(\d)/, "$1)$2"); // Adiciona um parêntese de fechamento após os dois próximos dígitos.

  value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Adiciona um hífen após o primeiro dígito dos quatro últimos dígitos.

  return value; // Retorna a string modificada.
};
