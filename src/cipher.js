/* FUNCOES QUE VAO CRIP/DECRIP AS MENSAGENS  */

/* FUNÇÃO DE CRIPTAR */
const cipher = {
    cifrar (desloc,texto) { 
      let final = "";
      for (let i=0; i<texto.length; i++){
        let cod1 = (texto.charCodeAt(i)+desloc-65)%26
        let cod2 = cod1 + 65
        let result = String.fromCharCode(cod2)
        final += result
      }
      return final
    },

/* FUNÇÃO DE DESCRIPTAR */
    decifrar (desloc,texto) {
      let final = "";
      for (let i=0; i<texto.length; i++){
        let cod1 = (texto.charCodeAt(i)-desloc+65)%26
        let cod2 = cod1 + 65
        let result = String.fromCharCode(cod2)
        final += result
      }
      return final
    },
};

export default cipher;


