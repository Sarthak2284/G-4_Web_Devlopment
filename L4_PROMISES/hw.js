async function getData(){
    try{
        const response = await fetch('https://dummyjson.com/products')
        if(!response.ok) throw new Error('Cannot fetch Products');
        const data = await response.json();
        const list = document.getElementById("products");
        list.innerHTML = ""
        data.products.forEach(product => {
            const li = document.createElement("li");
            li.textContent = `${product.title} - Rs${Math.round(product.price*85)}`
            list.appendChild(li);
        });
    }
    catch(error){
        console.log("Error: ", error.message)
    }
}

async function getDataTable(){
    try{
    const response = await fetch('https://dummyjson.com/products')
    if(!response.ok) throw new Error('Cannot fetch Products');
    const data = await response.json();
    const tbody = document.querySelector("#productsTable tbody")
    tbody.innerHTML = "";
    data.products.forEach(product=>{
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td><img src="${product.thumbnail}" alt="${product.title}" width="100" /></td>
            <td>${Math.floor(product.price*85.74)}</td>
        `;
        tbody.appendChild(row);
    })
}
catch(error){
    console.error("Error: " + error.message);
}
}
getData();
getDataTable();
