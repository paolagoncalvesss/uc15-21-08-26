// 1. Pegar a hora atual 
const agora = new Date();
const hora = agora.getHous(); 
const minutos = agora.geMinutes(); 
const minutosFormatados = String(minutos).padStart(2,'0'); 
const horaTexto = '${hora}:${minutosFormatados}'

//2. Selecionar elementos do HTML
const pagina   = document.getElementById('pagina');
const emojiEl  = document.getElementById('emoji');
const saudacaoEl  = document.getElementById('saudacao'); 
const horarioEl  = document.getElementById('horario'); 

//3. Variaveis que guardam o resultado 
let turno  = ''; 
let emojiStr = '';
let msg  =''; 

//4. Decidir o turno com if/else 
if (hora >= 5 && hora < 12) {
    turno = 'manha'; 
    emojiStr = '';
    msg = 'Bom dia!'; 
}

//5. Aplicar o tema na pagina
pagina.classList.add (turno);

//6. Colocar o conteudo nos elementos
emojiEl.textContent = emojiStr; 
saudacaoEl.textContent = msg; 
horarioEl.textContent = 'Sao ${horaTexto}h';

//7. Log para o desenvolvedor 
console.log ('Turno: ${turno} | Hora: ${horaTexto}');