// Generated by CoffeeScript 1.12.5
(function() {
  this.validar = function(valor) {
    if (valor.value === '') {
      return valor.className = 'error';
    } else {
      return valor.className = 'campos';
    }
  };

  this.validar_numeros = function(valor) {
    if ((valor.value === '') | (isNaN(valor.value))) {
      return valor.className = 'error';
    } else {
      return valor.className = 'campos';
    }
  };

  this.longitud = function(valor, min) {
    if (valor.value.length < min) {
      return valor.className = 'error';
    } else {
      return valor.className = 'campos';
    }
  };

}).call(this);