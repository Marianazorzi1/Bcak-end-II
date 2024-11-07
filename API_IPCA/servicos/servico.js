import historicoInflacao from "../dados/dados.js";

export const buscarIpcas = () =>{
    return historicoInflacao;
}
export const buscarIpcasPorAno = () =>{
    return historicoInflacao.filter(ipca => ipca.ano.includes(anoIpca));
}

export const buscarIpcaPorId = (id) =>{
    const idIpca = perseInt(id);
    return historicoInflacao.find(ipca => ipca.id === idIpca);

}