var H5P = H5P || {};

/**
 * Construtor.
 *
 * @param {object} params Opções para esta biblioteca.
 */
H5P.CustomCSS = function (params) {
  this.customCSS = params.customCSS || ''; // Obtém o CSS do usuário
};

/**
 * Insere o CSS dinâmico na página sem modificar arquivos do servidor.
 *
 * @param {jQuery} $wrapper
 */
H5P.CustomCSS.prototype.attach = function ($wrapper) {
  $wrapper.addClass('h5p-custom-css');

  if (this.customCSS) {
    // Verifica se já existe um estilo personalizado
    let styleTag = document.getElementById('h5p-custom-css-style');

    if (!styleTag) {
      // Se não existe, cria um novo
      styleTag = document.createElement('style');
      styleTag.id = 'h5p-custom-css-style';
      document.head.appendChild(styleTag);
    }

    // Adiciona o CSS do usuário ao <style>
    styleTag.innerHTML = this.customCSS;
  }
};
