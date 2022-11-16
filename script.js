const container = document.createElement("div");
container.setAttribute("class","container")

container.innerHTML=`<div class="calculator">
<input type="text" onkeypress='javascript: return isNumber(event)' id="tab" placeholder="0" >
<button onclick="Clear()">C</button>
<button id="del" onkeypress="del()" onclick="del()" >DEL</button>
<button onkeypress="display('.')">.</button>
<button onkeypress="display('*')">*</button>
<button onkeypress="display('%')">%</button>
<button onkeypress="display(7)">7</button>
<button onkeypress="display(8)">8</button>
<button onkeypress="display(9)">9</button>
<button onkeypress="display('/')">/</button>
<button onkeypress="display(4)">4</button>
<button onkeypress="display(5)">5</button>
<button onkeypress="display(6)">6</button>
<button onkeypress="display('-')">-</button>
<button onkeypress="display(1)">1</button>
<button onkeypress="display(2)">2</button>
<button onkeypress="display(3)">3</button>
<button onkeypress="display('+')">+</button>
<button onkeypress="display(0)">0</button>
<button onkeypress="display(00)">00</button>
<button class="equal" onkeypress="calc()" onclick="calc()">=</button> 
</div>`;

document.body.append(container);

const result = document.getElementById("tab")

function Clear(){
    result.value="";
}

function del(){
    result.value=result.value.slice(0,-1);
}

const display = (number) => {

    result.value += number;
}


function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    console.log(iKeyCode);
     if (iKeyCode == 61 )
    {
        calc();
        return false;
    }

    else if (iKeyCode != 46 && iKeyCode > 31 && iKeyCode != 37 && (iKeyCode < 42 || iKeyCode > 57)){
          alert ("Only give numbers for input")
          return false;
    }
    


    return true;
}

const calc=()=>{
    try{
        result.value = eval(result.value)
        console.log(eval(result.value))
    }
    catch(err){
        alert("Enter the valid input")
    }

}