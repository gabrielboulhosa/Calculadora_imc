import { useState } from 'react';
import Styles from './Calculadora.module.css';
import img from './img/saudavel.png';

function CalculadoraImc(params) {


const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [Resultado, SetResultado] = useState('');

 
function yyy(e) {
    e.preventDefault()
    calcular()
    
}



function calcular() {
    let resultado = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    SetResultado(resultado.toFixed(1));

}

function atualizarArea() {
    let imc = parseFloat(Resultado);

    if (!altura.includes('.') ) {
        return(
            <p className={Styles.error}>O campo é invalido !!!</p>
        )
    }
    
    else if (imc < 18.5) {
        return(
            <p>Abaixo do peso</p>
        )
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        return(
            <p>Peso normal</p>
        )
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        return(
            <p>Sobrepeso</p>
        )
    }
    else if (imc >= 30.0 && imc <= 34.9) {
        return(
            <p>Obesidade grau I</p>
        )
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        return(
            <p>Obesidade grau II</p>
        )
    }
     else if (imc >= 40.0) {
        return(
            <p>Obesidade grau III</p>
        )
    }
    else {
        return(
            <p>IMC inválido</p>
        )
    }
}




    
    return(
        <>
           <header>
            <div className="container">
                <div className={Styles.tamplete}>
                    <div className={Styles.tamplete1}>
                        <img src={img} alt="" />
                </div>

                <div className={Styles.tamplete2}>
                    <form onSubmit={yyy}>
                        <input value={peso} onChange={event => setPeso(event.target.value)} type="number" placeholder='Digite seu peso' required/>
                        <input value={altura} onChange={event => setAltura(event.target.value)} type="number" placeholder='Digite sua altura' required/>
                        <button type="submit">Calcular</button>
                    </form>

                    
                    <div className={Styles.tamplete2Cont}>
                        <div className={Styles.tamplete2ContText}>       
                            
                        {Resultado && (
                            <>
                            <h2 className={Styles.textImc}>Seu imc é: </h2>                           
                          <span className={Resultado < 18.5 ? Styles.baixo : Resultado <= 24.9 ? Styles.normal : Resultado <= 29.9 ? Styles.preocupante : Styles.preocupante}>{atualizarArea()}</span>
                          </>
                        )}
                        
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </header>      
        </>
    )
}

export default CalculadoraImc;