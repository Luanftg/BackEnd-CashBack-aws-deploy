import fetch from "node-fetch";

//export default (data, documentSearch, value) => {
export default (data, value,email) => {
//console.log(email);
const emailSearch = email;
    data.forEach(element => {
        const {id, email, cashbackPoints, document} = element;
        //console.log(cashbackPoints);
        //console.log(documentSearch);
        //console.log(document);
        
        if(emailSearch === email) {
          const pontosCadastrados = Number(cashbackPoints);
          //console.log('Pontos Cadastrados: ', pontosCadastrados);
          const pontosTotais = pontosCadastrados + Math.floor(value);
          //console.log('Pontos Somados: ', value);
          //console.log('Pontos Totais: ', pontosTotais);
          
          //atualiza valores no masterDAta
          const MasterDataUpdateDocumentAPIPath = `https://bitsized.vtexcommercestable.com.br/api/dataentities/Client/documents/${id}`;
          const MasterdataUpdateHeader = {
            "Content-Type": "application/json",
            "Connection": "keep-alive",
            "X-VTEX-API-AppKey": "vtexappkey-bitsized-FEQYTP",
            "X-VTEX-API-AppToken":"SGLRMYLVUYUVRTOOJGAPSUBTBZIMODTEJTETGNPBCLMBEMXFPMXTKVTDLWCFUEHDNJUJNPODRWLDWFVZDGKSONLCIINAXTIHUYOECVFEMZIGLWNKLMMVEAVVDYAVUNAV",
          };
          const bodyJ = {
            "email": email,
            "cashbackPoints": pontosTotais,
            "document": document,   
            };
            const bodyJson = JSON.stringify(bodyJ);
          fetch(MasterDataUpdateDocumentAPIPath, {
method:'PATCH',
headers: MasterdataUpdateHeader,
body: bodyJson
})
.then(function(response){
  //return response.json();
})
.then(function(response){
  //console.log(response.json());
})
}
})
//res.sendStatus(201);
}
