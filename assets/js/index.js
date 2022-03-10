import * as L from '../js/led.js';
import * as F from '../js/form.js';
import getAPINumber from '../js/api.js'

const min = 1;
const limit = 300;
const url = `https://us-central1-ss-devops.cloudfunctions.net/rand?min=${min}&max=${limit}`;
const el = {
    btnNew: F.form.btnNewGame,
    btnSubmit: F.form.btnSubmit,
    inputTxt: F.form.inputGuess,
    resultTxt: F.form.resultTxt,
};
const max = maxNumber(limit);

StartGame();

// Inicia o jogo, fazendo a requisição, caso seja OK, prossegue passando como parãmetro da função newgame() o próprio
// valor recebido pela requisição, caso a requisição dê errado, será mostrada no painel o código e no console o código do erro e a mensagem.
async function StartGame() {
    let data = await getAPINumber(url);
    if(data.value){
        const resNum = data.value;
//        console.log(resNum)
        newGame(resNum)
    }else{
        const statusCode = data.StatusCode;
        const errorMsg = data.Error;
        console.log(statusCode, errorMsg);
        displayError(statusCode);
    }
};

function newGame(resNum) {
    /* Setando valores default no display e no texto acima do Led, removendo (disabled) do input e do button */
    const indicator = el.resultTxt;
    handleDigits("0", 'default');
    el.btnSubmit.disabled = false;
    el.inputTxt.disabled = false;
    indicator.innerHTML = ''
    el.btnNew.classList.add("hideBtn");
    el.inputTxt.addEventListener('keyup', max);
    el.inputTxt.addEventListener('blur', max);
    el.btnSubmit.addEventListener("click", e => {
        const inputGuess = el.inputTxt.value;
        /*Removendo zero a esquerda caso haja com parseInt e radix 10(base decimal) */
        const guessNum = parseInt(inputGuess, 10);
        /*Convertendo para o número já correto para string, porque a função handleDigits() recebe uma string
        que vai ser divida */
        const guessNumStr = guessNum.toString();
        e.preventDefault();
        /* Verifica se o campo tem algum caractere e  */
        if(inputGuess.length > 0){
            handleDigits(guessNumStr, 'default');
            if(resNum > guessNumStr){
                indicator.innerHTML = "É maior";
                indicator.classList.add("default");
            };
            if(resNum < guessNumStr){
                indicator.innerHTML = "É menor";
                indicator.classList.add("default");
            };
            if(resNum == guessNumStr){
                indicator.innerHTML = "Você acertou!!!!";
                indicator.classList.remove("default");
                indicator.classList.add("correct");
                handleDigits(guessNumStr, 'correct')
                stopGame();
            }
            clearField();
        };
    });
};

// Função responsável por definir o valor máximo de 300 para o input, 
// caso o usuário tente digitar ou aumentar com a seta a mais que o limite a função escreve o valor máximo de 300
function maxNumber(max)
{
    let running = false;
    return function () {
        //Para evitar conflito entre o blur e o keyup
        if (running) return;
        //Bloqueia multiplas chamadas do blur e keyup
        running = true;
        //Se o input for maior que 300 ele irá fixa o valor maximo no value do input
        if (parseInt(this.value) > max) {
            this.value = 300;
        }
        //Habilita novamente as chamadas do blur e keyup
        running = false;
    };
}

// Função responsável por parar o jogo em caso de erro ou acerto do usuário
function stopGame(){
    el.btnNew.classList.remove("hideBtn");
    el.btnNew.addEventListener('click', () => location.reload());
    el.btnSubmit.disabled = true;
    el.inputTxt.disabled = true;
};
// Função responsável por mostar no display de led o número do erro caso ocorra e atualizar o status acima do painel
function displayError(res){
    const code = res.toString();
    el.resultTxt.innerHTML = "ERRO";
    el.resultTxt.classList.add("error");
    handleDigits(code, 'error');
    stopGame();
};

//Função responsável por acender o Digito de led de acordo com o número recebido e estado, para assim definir
// a cor que o segmento deve acender utilizar 
function TurnON(number, digit, state){
        if(number === "0") return L.Zero(digit, state);
        if(number === "1") return L.One(digit, state);
        if(number === "2") return L.Two(digit, state);
        if(number === "3") return L.Three(digit, state);
        if(number === "4") return L.Four(digit, state);
        if(number === "5") return L.Five(digit, state);
        if(number === "6") return L.Six(digit, state);
        if(number === "7") return L.Seven(digit, state);
        if(number === "8") return L.Eight(digit, state);
        if(number === "9") return L.Nine(digit, state);
};
//Função resposável por desligar o segmento não usado para acender um novo segmento
function TurnOFF(segment){
    L.off(segment);
};
// Função responsável por esconder os dígitos que não são necessários dependendo do tamanho do número
function hideDigit(digit){
    digit.classList.add("hide");
};

// Função responsável por mostrar novamente o dígito, exemplo: 
// - usuário digitou 123 (nenhum dígito apaga)
// - usuário digtou 12 (o último dígito apaga, ficando somente 2 visíveis)
// - usuráio novamente digitou um número com 3 caracteres é chamada a função showDigit() para fazer reaparecer o dígito apagado;
function showDigit(digit){
    digit.classList.remove("hide");
};
//Função responsável por limpar o campo de palpite de número
function clearField(){
    el.inputTxt.value = '';
};
/* Função responsável por mostrar o dígito com o uso das funções (TurnON) e (hideDigit) */
function handleDigits(num, state) {
    /* Dividino o número recebido  */
    const arrayNum = num.split("");
    /*Digito divido por unidades */
    const digit = [L.Digits.D1, L.Digits.D2, L.Digits.D3,];
    /*Digito dividido por segmentos */
    const d = [L.DgtOne, L.DgtTwo, L.DgtThree];
    /* Número divido em variáveis para reaproveitamento de valor por indíces, assim fazendo com que cada dígito corresponda a
    um número do painel de led  */
    const [x, y, z] = arrayNum;
    // Removendo a classe (hide) do dígito inteiro
    showDigit(digit[0]);
    showDigit(digit[1]);
    showDigit(digit[2]);

    /* Limpando(desligando) todos os segmentos de todos os dígitos 
        para acender de acordo com o número recebido, que é dividido 
        e passado como parâmetro para a função TurnOn().
    */
    TurnOFF(d[0]);
    TurnOFF(d[1]);
    TurnOFF(d[2]);
    /* Verifica o tamando do número e acende o dígito de acordo 
        com o mesmo.
    */
    if(num.length === 1){
        TurnON(x, d[0], state);
        hideDigit(digit[1]);
        hideDigit(digit[2]);
    }  
    if(num.length === 2){
        TurnON(x, d[0], state);
        TurnON(y, d[1], state);
        hideDigit(digit[2]);
    }
    if(num.length === 3){
        TurnON(x, d[0], state);
        TurnON(y, d[1], state);
        TurnON(z, d[2], state);
    };
};
