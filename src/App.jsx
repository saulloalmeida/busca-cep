import { useState } from 'react'
import InfoData from './InfoData'
import InfoHistory from './InfoHistory'
import Search2 from './Search2'
import api from './services/api'

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  const [history, setHistory] = useState([]);
  async function handleClick() {
    if (input === '') {
      alert('Digite um cep válido')
      return
    }
    try {
      const response = await api.get(`${input}/json/`)
      setCep(response.data)
      history === [] ? setHistory([response.data]) : setHistory([response.data, ...history])
      setInput('')
    }
    catch {
      alert('erro')
      setInput('')
    }
  }
  function modifyInput(input){
    setInput(input)
  }
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <Search2 modifyInput={modifyInput}  handleClick={handleClick} input={input}/>

      {Object.keys(cep).length !== 0 && <div className="border border-white w-full pb-4">
        <h2 className="mt-4 mb-4 text-2xl text-center text-gray-600 dark:text-gray-200">Busca atual:</h2>
        <InfoData name="CEP" info={cep.cep} />
        <InfoData name="Logradouro" info={cep.logradouro} />
        <InfoData name="Complemento" info={cep.complemento} />
        <InfoData name="Bairro" info={cep.bairro} />
        <InfoData name="Localidade" info={cep.localidade} />
        <InfoData name="UF" info={cep.uf} />
        <InfoData name="IBGE" info={cep.ibge} />
        <InfoData name="DDD" info={cep.ddd} />
      </div>
      }

      <div className="bg-gray-700 w-full pb-4">
        {history.length !== 0 && <h2 className="mt-4 mb-4 text-2xl text-center text-gray-600 dark:text-gray-200">Histórico das buscas:</h2>}
        {history.length !== 0 && history.map(({ cep, localidade }, index) => {
          return <InfoHistory key={index} cep={cep} localidade={localidade} />
        })}
      </div>
    </div>
  )
}

export default App
