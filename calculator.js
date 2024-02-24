let result=0;

        function add(){
            let a=parseFloat(document.getElementById("ope1").value);
            let b=parseFloat(document.getElementById("ope2").value);
            result=a + b;
            document.getElementById("result").innerText=result;
        }

        let sub=function(){
            let a=parseFloat(document.getElementById("ope1").value);
            let b=parseFloat(document.getElementById("ope2").value);
            result=a - b;
            document.getElementById("result").innerText=result;
        }

        let mul=()=>{
            let a=parseFloat(document.getElementById("ope1").value);
            let b=parseFloat(document.getElementById("ope2").value);
            result=a * b;
            document.getElementById("result").innerText=result;
        }

        function div(){
            let a=parseFloat(document.getElementById("ope1").value);
            let b=parseFloat(document.getElementById("ope2").value);
            if(b==0){
                alert("Cannot devide by Zero");
            }
            else{
                result=a / b;
            }
            document.getElementById("result").innerText=result;
        }