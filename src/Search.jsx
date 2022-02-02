import React from 'react';

export default function Search(props) {

    return <>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">BuscaCep</h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-200">Busca facilmente um endereço a partir do cep.</p>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Informe o CEP </label>
                <input onChange={(e) => props.modifyInput(e.target.value)} value={props.input} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
            </div>
            <div className="mt-8">
                <button onClick={props.handleClick} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Buscar
                </button>
            </div>
        </div>
    </>;
}
