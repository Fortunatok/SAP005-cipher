/* FUNCOES QUE VAO CRIP/DECRIP AS MENSAGENS  */


const cipher = {
    cifrar (desloc, texto) { 
      let final = "";
      for (let i=0; i<texto.length; i++){
        let resultado1 = (texto.charCodeAt(i)+desloc-65)%26
        let resultado2 = resultado1 + 65
        let imprimir = String.fromCharCode(resultado2)
        final += imprimir
      }
      return final
    },

    decifrar (desloc,texto) {
      let final = "";
      for (let i=0; i<texto.length; i++){
        let resultado1 = (texto.charCodeAt(i)-desloc+65)%26
        let resultado2 = resultado1 + 65
        let imprimir = String.fromCharCode(resultado2)
        final += imprimir
      }
      return final
    },
};

export default cipher;


