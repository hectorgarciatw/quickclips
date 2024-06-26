import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Empty() {
    return (
        <section className="w-full">
            <div className="container relative flex flex-col px-6 py-24 mx-auto">
                <section className="flex items-center flex-1">
                    <div className="flex flex-col w-full ">
                        <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">Panel</span>
                            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500"> sin contenido</span>
                        </h1>
                        <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">🤖 No dispones de clips en este momento, comienza creando el primero!</p>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Empty;
