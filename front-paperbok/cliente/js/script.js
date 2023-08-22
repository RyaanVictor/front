function carregarClientes() {
    //Variável para carregar os dados dos clientes
    let dados = "";
    fetch("http://10.26.45.64:5000/api/v1/cliente/listar")
      .then((response) => response.json())
      .then((rs) => {
        rs.map((itens, ix) => {
          dados += `<li>
                      <div class="linha">
                          <span class="idcliente">${itens.idcliente}</span>
                          <span class="nome">${itens.nomecliente}</span>
                          <span class="sexo">${itens.sexocliente}</span>
                          <span class="maisinformacoes">
                          <a href="#" id="maisinfo" onclick="info('${itens.idcliente}')">Mais informações</a>
                          </span>
                      </div>      
                    </li>`;
        });
        document.getElementById("lstclientes").innerHTML = dados;
        console.log(rs);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function info(id) {
    let dados = "";
    fetch("http://10.26.45.64:5000/api/v1/cliente/buscar/" + id)
      .then((response) => response.json())
      .then((rs) => {
        dados = `
        Dados do Cliente 
        ${rs.nomecliente} 
       CPF:${rs.cpfcliente} 
       RG:${rs.rgcliente} 
        Sexo:${rs.sexocliente} 
        Data Nascimento:${rs.datanascimentocliente} 
        End:${rs.endereco.logradouro} 
        N°:${rs.endereco.numero} 
        Bairro:${rs.endereco.bairro}
        Cidade:${rs.endereco.cidadde}
        Celular:${rs.contato.telefonecelular}
        Residencial:${rs.contato.telefoneresidencial}
        E-Mail:${rs.contato.email}
        Login:${rs.usuario.login}
        Nivel Acesso:${rs.usuario.nivelacesso}
        `;
    
         alert(dados);
  })
  .catch((err) => console.error(err));
}