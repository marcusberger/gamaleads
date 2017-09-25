$(document).ready(function() {
  //Validação dos campos no submit do form principal
  $("#form-side-bar").submit(function() {
    var temNome, temEmail, isValid = false;

    //Restabelece o estado inicial dos elementos da tela
    $("#nome").removeClass("borda-vermelha");
    $("#email").removeClass("borda-vermelha");
    $("#alert-obrigatorio").hide();
    $("#alert-email-invalido").hide();

    //Valida se os campos e-mail e senha estão em branco
    temNome = validarCampoVazio("#nome", "#alert-obrigatorio");
    temEmail = validarCampoVazio("#email", "#alert-obrigatorio");
    if (temEmail && temNome) {
      isValid = true;
      isValid = validaEmail("#email", "#alert-email-invalido");
    }
    return isValid
  })

  $("#form-footer").submit(function() {
    var temNome, temEmail, isValid = false;

    //Restabelece o estado inicial dos elementos da tela
    $("#nome-footer").removeClass("borda-vermelha");
    $("#email-footer").removeClass("borda-vermelha");
    $("#alert-obrigatorio-footer").hide();
    $("#alert-email-invalido-footer").hide();

    //Valida se os campos e-mail e senha estão em branco
    temNome = validarCampoVazio("#nome-footer", "#alert-obrigatorio-footer");
    temEmail = validarCampoVazio("#email-footer", "#alert-obrigatorio-footer");
    if (temEmail && temNome) {
      isValid = true;
      isValid = validaEmail("#email-footer", "#alert-email-invalido-footer");
    }
    return isValid
  })

})
