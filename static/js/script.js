const produtos = [
    { nome: "Pastilha de Freio Dianteira Audi A4", marca: "Bosch", descricao: "Pastilhas de alta performance para frenagem segura.", imagem: "https://npximports.com.br/cdn/shop/files/pastilha-freio-dianteira-audi-a4-a5-2-0-tfsi-2015-2016-2017-npx-imports-1.jpg?v=1693000446" },
    { nome: "Filtro de Ar BMW Série 3", marca: "Mann-Filter", descricao: "Filtro eficiente que protege o motor da sujeira.", imagem: "https://31b93296e4855c6e.cdn.gocache.net/loja/imagens/full/filtro-de-ar-esportivo-inbox-race-chrome-bmw-320-325-328-330-e36-e43-rci152-01.png" },
    { nome: "Vela de Ignição Mercedes-Benz C200", marca: "NGK", descricao: "Melhora a ignição e a eficiência do combustível.", imagem: "https://cdn.awsli.com.br/600x1000/2695/2695989/produto/2634317247a62f09618.jpg" },
    { nome: "Amortecedor Traseiro Volvo XC60", marca: "Monroe", descricao: "Suspensão macia e controle em curvas.", imagem: "https://npximports.com.br/cdn/shop/files/amortecedor-traseiro-volvo-xc60-2008-a-2017-t5-t6-par-npx-imports-1_600x600_crop_center.jpg?v=1693026337" },
    { nome: "Disco de Freio Dianteiro BMW X1", marca: "Fremax", descricao: "Desempenho de frenagem superior e durável.", imagem: "https://npximports.com.br/cdn/shop/files/pastilha-freio-dianteira-bmw-x1-f48-sdrive-20i-2014-npx-imports-1.jpg?v=1693016649" },
    { nome: "Bateria AGM 70Ah Land Rover Evoque", marca: "Heliar", descricao: "Energia confiável para veículos modernos.", imagem: "https://cdn.awsli.com.br/600x700/1592/1592328/produto/174073445/11a31a6dfe.jpg" },
    { nome: "Sensor de Estacionamento Porsche Cayenne", marca: "Bosch", descricao: "Precisão para manobras seguras.", imagem: "https://i.ebayimg.com/images/g/57kAAOSwL4BmkRVp/s-l1200.jpg" },
    { nome: "Filtro de Combustível Audi Q5", marca: "Mahle", descricao: "Filtragem de combustível eficiente e durável.", imagem: "https://images.tcdn.com.br/img/img_prod/229689/filtro_de_combustivel_audi_q5_2_0_tfsi_e_3_0_tfsi_de_2013_a_2017_8r0919051e_251845209_3_b05995957e0eb8db366852fe06c483ee.jpg" },
    { nome: "Correia Dentada Mini Cooper", marca: "Continental", descricao: "Resistência e desempenho garantido.", imagem: "https://http2.mlstatic.com/D_NQ_NP_732544-MLB70559295241_072023-O.webp" },
    { nome: "Farol Dianteiro Esquerdo BMW 320i", marca: "Magneti Marelli", descricao: "Iluminação de alta performance e estilo.", imagem: "https://static.casteloautopecas.com.br/public/casteloautopecas/imagens/produtos/farol-bmw-serie-3-320i-328i-2016-ate-2018-black-com-led-sem-reator-lado-esquerdo-motorista-6602bbe3d34b0.jpg" },
    { nome: "Kit Embreagem Mercedes-Benz Classe A", marca: "Luk", descricao: "Engates suaves e durabilidade prolongada.", imagem: "https://images.tcdn.com.br/img/img_prod/661691/kit_embreagem_mercedes_benz_classe_a_160_mecanica_ano_99_a_2005_marca_mecarm_italia_2145136271_1_20190424125955.jpg" },
    { nome: "Radiador de Motor Audi A3", marca: "Valeo", descricao: "Controle de temperatura com eficiência.", imagem: "https://cdn.awsli.com.br/600x700/2561/2561011/produto/281088756/93de38ea988f6ff1ffe4f3ec835e9fba-nyb6lpaeax.jpg" },
    { nome: "Bomba de Combustível Jaguar XE", marca: "Delphi", descricao: "Fluxo estável para máxima performance.", imagem: "https://http2.mlstatic.com/D_NQ_NP_877137-MLB74093112567_012024-O-bomba-de-combustivel-original-jaguar-xe-20-t4n7833.webp" },
    { nome: "Retrovisor Elétrico Direito BMW X5", marca: "Febi Bilstein", descricao: "Visão perfeita com ajuste elétrico.", imagem: "https://someacessorios.com.br/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/0/1/01aplique_retrovisor_bmw_x5_g05_sport_black_piano_vo6.jpg" },
    { nome: "Sensor ABS Traseiro Volvo S60", marca: "Bosch", descricao: "Evita travamentos e garante segurança.", imagem: "https://images.tcdn.com.br/img/img_prod/670499/sensor_de_abs_volvo_xc_60_xc40_s60_26438_1_fd6d796380817310a40fbed385ccab8b.jpg" },
    { nome: "Parafuso de Roda Mercedes GLA", marca: "Febi Bilstein", descricao: "Pequeno, mas essencial para sua segurança.", imagem: "https://images.tcdn.com.br/img/img_prod/690041/parafuso_de_roda_mercedes_c_2007_em_diante_cla_gla_2013_em_diante_a_e_b_2012_em_diante_w176_w246_w24_849_1_3120302701fea227abf6e6460f9e64b4.jpg" },
    { nome: "Kit de Suspensão Dianteira Land Rover Freelander", marca: "Monroe", descricao: "Condução suave em qualquer terreno.", imagem: "https://www.outpec.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/p/a/par_amortecedor_dianteiro_freelander_2_land_rover_2007_a_2015_7_.jpg" },
    { nome: "Escapamento Esportivo Audi TT", marca: "Borla", descricao: "Design agressivo e ronco esportivo.", imagem: "https://www.digipower.com.br/wp-content/uploads/2024/04/ESCAPAMENTO-AUDI-TT-2015-17.jpg" },
    { nome: "Palheta Dianteira BMW Z4", marca: "Bosch", descricao: "Limpeza eficiente para máxima visibilidade.", imagem: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lzjifnu05385f6" },
    { nome: "Tampa de Válvula Jaguar F-Pace", marca: "Mahle", descricao: "Vedação confiável e duradoura.", imagem: "https://hrbimports.com.br/wp-content/uploads/2025/03/MOBASI-344" }
];

function renderizarProdutos(lista) {
    const container = document.getElementById('produtos-container');
    container.innerHTML = "";
    lista.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p><strong>Marca:</strong> ${produto.marca}</p>
            <p>${produto.descricao}</p>
            <button onclick="comprarProduto('${produto.nome}')">Comprar</button>
        `;
        container.appendChild(div);
    });
}

function comprarProduto(nomeProduto) {
    fetch('/comprar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ produto: nomeProduto })
    })
    .then(res => res.json())
    .then(data => alert(data.mensagem))
    .catch(err => alert("Erro ao tentar comprar: " + err));
}

document.getElementById('searchBar').addEventListener('input', function () {
    const termo = this.value.toLowerCase();
    const filtrados = produtos.filter(prod => prod.nome.toLowerCase().includes(termo));
    renderizarProdutos(filtrados);
});

renderizarProdutos(produtos);