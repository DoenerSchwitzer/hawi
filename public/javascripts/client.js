window.onload = () => {
    fetch('./todos')
        .then(response => response.json())
        .then(data => {
        // @ts-ignore
        let todoElem = document.querySelector("#div");
        const todos = data;
        let elem;
        todos.forEach(t => {
            elem = document.createElement("div");
            elem.innerText = t.name;
            todoElem.appendChild(elem);
        });
    });
};
export {};
