import fetch from "node-fetch";
import masterDataSearch from "./masterDataSearch.js";

export default (userId,value)=> {
    //console.log(userId);
   const BuscaEmailPath =  `https://bitsized.vtexcommercestable.com.br/api/dataentities/CL/search?userId=${userId}&_fields=email`;
   const Header = {
    "Content-Type": "application/json",
    "Connection": "keep-alive",
    "X-VTEX-API-AppKey": "vtexappkey-bitsized-FEQYTP",
    "X-VTEX-API-AppToken":"SGLRMYLVUYUVRTOOJGAPSUBTBZIMODTEJTETGNPBCLMBEMXFPMXTKVTDLWCFUEHDNJUJNPODRWLDWFVZDGKSONLCIINAXTIHUYOECVFEMZIGLWNKLMMVEAVVDYAVUNAV",
    }

    fetch(BuscaEmailPath, {
        method:'GET',
        headers: Header
      })
        .then( function(response) {
            return response.json();
            })
        .then(function(response){

          //console.log(response);
          const {email} = response[0];
          //console.log(email);
          masterDataSearch(email,value);
        });
}