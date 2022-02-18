import "./app.css";

export default function App(){
  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input 
        type="text"
        placeholder="peso em (kg) Ex: 90"
        />
        <input 
        type="text"
        placeholder="altura em (cm) Ex: 180"
        />
        
          <button>
            calcular
          </button>
        
      </div>

        <h2>Seu imc foi 25, você está abaixo do peso!</h2>

    </div>
  )
}