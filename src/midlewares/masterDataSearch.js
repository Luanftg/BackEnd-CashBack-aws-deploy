import fetch from "node-fetch";
import masterDataUpdate from "./masterDataUpdate.js";
export default (email,value) => {

    const MasterDataSearchAPIPath = `https://bitsized.vtexcommercestable.com.br/api/dataentities/Client/search?_fields=email,cashbackPoints,document,id`;
   
    const SearchHeader = {
        "Content-Type": "application/json",
        "Connection": "keep-alive",
        "X-VTEX-API-AppKey": "vtexappkey-bitsized-FEQYTP",
        "X-VTEX-API-AppToken":"SGLRMYLVUYUVRTOOJGAPSUBTBZIMODTEJTETGNPBCLMBEMXFPMXTKVTDLWCFUEHDNJUJNPODRWLDWFVZDGKSONLCIINAXTIHUYOECVFEMZIGLWNKLMMVEAVVDYAVUNAV",
    } 
      fetch(MasterDataSearchAPIPath, {
        method:'GET',
        headers: SearchHeader
      })
        .then( function(response) { return response.json() })
        .then(function(response){
          console.log(response)
          const data = response;
          console.log(data);
          masterDataUpdate(data,value,email);
        });
      
}
