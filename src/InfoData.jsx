import React from 'react';

export default function InfoData({ name, info }) {
    return <>
        {info &&
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
                <span className="text-xl font-bold text-center text-gray-600 dark:text-gray-200">{name}: </span>
                <span className="text-xl text-center text-gray-600 dark:text-gray-200">{info}</span>
            </h2>
        }
    </>
        ;
}
