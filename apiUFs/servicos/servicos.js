import colecaoUf from '../dados/dados.js';

export const buscarUfs = () =>{
    return colecaoUf;
}
export const buscarUfsPorNome = () =>{
    return colecaoUf.filter(uf => uf.nome.toLocaleLowerCase().includes(nomeUf.toLocaleLowerCase()));
}

export const buscarUfPorId = (id) =>{
    const idUf = perseInt(id);
    return colecaoUf.find(uf => uf.id === idUf);

}