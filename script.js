let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C': 
                display.innerText = ''
                break
            case 'CE':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                }
                break
            case '=':
                try {
                    display.innerText = display.innerText.replace("x", "*")
                    display.innerText = display.innerText.replace("÷", "/")
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = 'Expressão inválida!'
                }

                break
            default: 
            display.innerText += e.target.innerText
        }
    })
})
