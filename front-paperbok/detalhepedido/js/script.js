function carregarDados(){

    let lstdetalhepedido = document.getElementById("lstDetalhePedido");
    let dados = "";

    fetch("http://10.26.45.64:5000/api/v1/detalhepedido/listar")
    .then((response) => response.json())
    .then((rs)=>{
        console.log(rs);
        rs.map((itens, ix)=>{
            dados += `<ul id="itemdetalhepedido">
                        <li>${itens.iddetalhepedido}</li>
                        <li>${itens.quantidade}</li>
                        <li>${itens.valortotal}</li>
                        <li>${itens.precounitario}</li>
                    </ul>`;
                    lstdetalhepedidos.innerHTML+=dados;

        })
    }).catch((err)=>console.error(err));




}