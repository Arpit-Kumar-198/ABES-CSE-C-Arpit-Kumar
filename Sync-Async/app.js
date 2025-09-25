        const inputBox = document.querySelector("#input-box");
        const addButton = document.querySelector("#add-btn");

        const items = document.querySelector('.items');
    

        addButton.addEventListener('click', ()=>{
            const p = document.createElement("p");
            p.innerText = inputBox.value;
            items.appendChild(p);
            
            inputBox.value = "";
           
        });