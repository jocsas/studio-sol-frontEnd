
/* Selecionando todos os Digitos para ser usado na função de esconder dependendo do tamanho*/
export const Digits = {
    D1: document.querySelector("#digit-1"),
    D2: document.querySelector("#digit-2"),
    D3: document.querySelector("#digit-3")
};

/* Selecionando todos os segmentos de cada dígito, para por meio da função "acender" de acordo com o número necessário  */
export const DgtOne = {
    segA: document.querySelector("#digit-1 .a"),
    segB: document.querySelector("#digit-1 .b"),
    segC: document.querySelector("#digit-1 .c"),
    segD: document.querySelector("#digit-1 .d"),
    segE: document.querySelector("#digit-1 .e"),
    segF: document.querySelector("#digit-1 .f"),
    segG: document.querySelector("#digit-1 .g"),
};
export const DgtTwo = {
    segA: document.querySelector("#digit-2 .a"),
    segB: document.querySelector("#digit-2 .b"),
    segC: document.querySelector("#digit-2 .c"),
    segD: document.querySelector("#digit-2 .d"),
    segE: document.querySelector("#digit-2 .e"),
    segF: document.querySelector("#digit-2 .f"),
    segG: document.querySelector("#digit-2 .g"),
};
export const DgtThree = {
    segA: document.querySelector("#digit-3 .a"),
    segB: document.querySelector("#digit-3 .b"),
    segC: document.querySelector("#digit-3 .c"),
    segD: document.querySelector("#digit-3 .d"),
    segE: document.querySelector("#digit-3 .e"),
    segF: document.querySelector("#digit-3 .f"),
    segG: document.querySelector("#digit-3 .g"),
};
/*Fim do comentário*/

/* Funções para criação de número usando seleção dos segmentos separados que recebem por parâmetro os dígitos e o estado,
 e faz uma comparação, dependendo do estado, acende o led na cor necessário, exemplo: caso seja passado por parâmetro o Digito 1 e 'erro',
 acenderá os segmentos para formar o numero um e adicionará a classe 'erro', do (led.css) que fará com que os segmentos fiquem vermelhos.
 */

export function Zero(digit, state){
    if(state === 'default'){
        digit.segA.classList.add("on");
        digit.segB.classList.add("on");
        digit.segC.classList.add("on");
        digit.segD.classList.add("on");
        digit.segE.classList.add("on");
        digit.segF.classList.add("on");
    };
    if(state === 'correct'){
        digit.segA.classList.add("correct");
        digit.segB.classList.add("correct");
        digit.segC.classList.add("correct");
        digit.segD.classList.add("correct");
        digit.segE.classList.add("correct");
        digit.segF.classList.add("correct");
    };
    if(state === 'error'){
        digit.segA.classList.add("error");
        digit.segB.classList.add("error");
        digit.segC.classList.add("error");
        digit.segD.classList.add("error");
        digit.segE.classList.add("error");
        digit.segF.classList.add("error");
    }
};
export function One(digit, state){
    if(state === 'default'){
        digit.segB.classList.add("on");
        digit.segC.classList.add("on");
    };
    if(state === 'correct'){
        digit.segB.classList.add("correct");
        digit.segC.classList.add("correct");
    };
    if(state === 'error'){
        digit.segB.classList.add("error");
        digit.segC.classList.add("error");
    }
};
export function Two(digit, state){
    if(state === 'default'){
        digit.segA.classList.add("on");
        digit.segB.classList.add("on");
        digit.segD.classList.add("on");
        digit.segE.classList.add("on");
        digit.segG.classList.add("on");
    };
    if(state === 'correct'){
        digit.segA.classList.add("correct");
        digit.segB.classList.add("correct");
        digit.segD.classList.add("correct");
        digit.segE.classList.add("correct");
        digit.segG.classList.add("correct");
    };
    if(state === 'error'){
        digit.segA.classList.add("error");
        digit.segB.classList.add("error");
        digit.segD.classList.add("error");
        digit.segE.classList.add("error");
        digit.segG.classList.add("error");
    }
};
export function Three(digit, state){
    if(state === 'default'){
        digit.segA.classList.add("on");
        digit.segB.classList.add("on");
        digit.segC.classList.add("on");
        digit.segD.classList.add("on");
        digit.segG.classList.add("on");
    };
    if(state === 'correct'){
        digit.segA.classList.add("correct");
        digit.segB.classList.add("correct");
        digit.segC.classList.add("correct");
        digit.segD.classList.add("correct");
        digit.segG.classList.add("correct");
    };
    if(state === 'error'){
        digit.segA.classList.add("error");
        digit.segB.classList.add("error");
        digit.segC.classList.add("error");
        digit.segD.classList.add("error");
        digit.segG.classList.add("error");
    }
};
export function Four(digit, state){
    if(state === 'default'){
        digit.segB.classList.add("on");
        digit.segC.classList.add("on");
        digit.segF.classList.add("on");
        digit.segG.classList.add("on");
    };
    if(state === 'correct'){
        digit.segB.classList.add("correct");
        digit.segC.classList.add("correct");
        digit.segF.classList.add("correct");
        digit.segG.classList.add("correct");
    };
    if(state === 'error'){
        digit.segB.classList.add("error");
        digit.segC.classList.add("error");
        digit.segF.classList.add("error");
        digit.segG.classList.add("error");
    }
};
export function Five(digit, state){
    if(state === 'default'){
        digit.segA.classList.add("on");
        digit.segC.classList.add("on");
        digit.segD.classList.add("on");
        digit.segF.classList.add("on");
        digit.segG.classList.add("on");
    };
    if(state === 'correct'){
        digit.segA.classList.add("correct");
        digit.segC.classList.add("correct");
        digit.segD.classList.add("correct");
        digit.segF.classList.add("correct");
        digit.segG.classList.add("correct");
    };
    if(state === 'error'){
        digit.segA.classList.add("error");
        digit.segC.classList.add("error");
        digit.segD.classList.add("error");
        digit.segF.classList.add("error");
        digit.segG.classList.add("error");
    }
};
export function Six(digit, state){
    if(state === 'default'){
        digit.segA.classList.add("on");
        digit.segC.classList.add("on");
        digit.segD.classList.add("on");
        digit.segE.classList.add("on");
        digit.segF.classList.add("on");
        digit.segG.classList.add("on");
    };
    if(state === 'correct'){
        digit.segA.classList.add("correct");
        digit.segC.classList.add("correct");
        digit.segD.classList.add("correct");
        digit.segE.classList.add("correct");
        digit.segF.classList.add("correct");
        digit.segG.classList.add("correct");
    };
    if(state === 'error'){
        digit.segA.classList.add("error");
        digit.segC.classList.add("error");
        digit.segD.classList.add("error");
        digit.segE.classList.add("error");
        digit.segF.classList.add("error");
        digit.segG.classList.add("error");
    }
};
export function Seven(digit, state){
    if(state === 'default'){
        digit.segA.classList.add("on");
        digit.segB.classList.add("on");
        digit.segC.classList.add("on");
    };
    if(state === 'correct'){
        digit.segA.classList.add("correct");
        digit.segB.classList.add("correct");
        digit.segC.classList.add("correct");
    };
    if(state === 'error'){
        digit.segA.classList.add("error");
        digit.segB.classList.add("error");
        digit.segC.classList.add("error");
    }
};
export function Eight(digit, state){
    if(state === 'default'){
        digit.segA.classList.add("on");
        digit.segB.classList.add("on");
        digit.segC.classList.add("on");
        digit.segD.classList.add("on");
        digit.segE.classList.add("on");
        digit.segF.classList.add("on");
        digit.segG.classList.add("on");
    };
    if(state === 'correct'){
        digit.segA.classList.add("correct");
        digit.segB.classList.add("correct");
        digit.segC.classList.add("correct");
        digit.segD.classList.add("correct");
        digit.segE.classList.add("correct");
        digit.segF.classList.add("correct");
        digit.segG.classList.add("correct");
    };
    if(state === 'error'){
        digit.segA.classList.add("error");
        digit.segB.classList.add("error");
        digit.segC.classList.add("error");
        digit.segD.classList.add("error");
        digit.segE.classList.add("error");
        digit.segF.classList.add("error");
        digit.segG.classList.add("error");
    }
};
export function Nine(digit, state){
    if(state === 'default'){
        digit.segA.classList.add("on");
        digit.segB.classList.add("on");
        digit.segC.classList.add("on");
        digit.segD.classList.add("on");
        digit.segF.classList.add("on");
        digit.segG.classList.add("on");
    };
    if(state === 'correct'){
        digit.segA.classList.add("correct");
        digit.segB.classList.add("correct");
        digit.segC.classList.add("correct");
        digit.segD.classList.add("correct");
        digit.segF.classList.add("correct");
        digit.segG.classList.add("correct");
    };
    if(state === 'error'){
        digit.segA.classList.add("error");
        digit.segB.classList.add("error");
        digit.segC.classList.add("error");
        digit.segD.classList.add("error");
        digit.segF.classList.add("error");
        digit.segG.classList.add("error");
    }
};
// Função responsável por desligar todos os segmentos, e importada no (index.js) apenas recebendo como parâmetro o dígito necessário.
export function off(segment){
    segment.segA.classList.remove("on");
    segment.segB.classList.remove("on");
    segment.segC.classList.remove("on");
    segment.segD.classList.remove("on");
    segment.segE.classList.remove("on");
    segment.segF.classList.remove("on");
    segment.segG.classList.remove("on");
};