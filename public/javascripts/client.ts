import {response} from "express";
import {ITodo} from "../../model/ITodo";

window.onload = () => {
    fetch('./todos')
        .then(response => response.json())
        .then(data => {
            // @ts-ignore
            let todoElem: HTMLDivElement = document.querySelector("#div");
            const todos: ITodo[] = data as ITodo[];
            let elem: HTMLDivElement;
            todos.forEach(t => {
                elem = document.createElement("div");
                elem.innerText = t.name;

                todoElem.appendChild(elem);
            });
        });
}