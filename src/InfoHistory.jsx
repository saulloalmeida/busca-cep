import React from 'react';

export default function InfoHistorico({cep, localidade}) {
    return <>
    {cep &&
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            <span className="text-xl text-center text-gray-600 dark:text-gray-200">{cep}</span> - 
            <span className="text-xl text-center text-gray-600 dark:text-gray-200"> {localidade}</span>
        </h2>
    }
</>;
}
