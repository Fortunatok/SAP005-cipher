/* FUNCOES QUE VAO CRIP/DECRIP AS MENSAGENS  */

/* FUNÇÃO DE CRIPTAR */
const cipher = {
    encode (desloc,texto) { 
      let final = "";
        for (let i=0; i<texto.length; i++){
          if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <=90){
            let cod1 = (texto.charCodeAt(i)+desloc-65)%26
            let cod2 = cod1 + 65
            let result = String.fromCharCode(cod2)
            final += result
          }
          else{
            throw new TypeError(alert("Inserir apenas letras maiusculas!"))
          }
        }
           return final
    },

/* FUNÇÃO DE DESCRIPTAR */
    decode (desloc,texto) {
      let final = "";
      for (let i=0; i<texto.length; i++){
        if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <=90){
          let cod1 = (texto.charCodeAt(i)-desloc+65)%26
          let cod2 = cod1 + 65
          let result = String.fromCharCode(cod2)
          final += result
        }
        else{
          throw new TypeError(alert("Inserir apenas letras maiusculas!"))
        }
      }
        return final
    },
  }
export default cipher;


