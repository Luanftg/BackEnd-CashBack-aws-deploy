import 'dotenv/config';
import fetch from 'node-fetch';

const hookConfigController = {
    ping: (req, res) => {
         
        const { hookConfig } = req.body;
        const { OrderId }  = req.body;  

        if(!hookConfig && !OrderId) {
          res.status(422).json({"message": "Bad Request!!!" });  
          } else if (OrderId) { 

            const OrderAPIPath = `https://bitsized.myvtex.com/api/oms/pvt/orders/${OrderId}/`;
            const OrderHeader = {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "X-VTEX-API-AppKey": "vtexappkey-bitsized-FEQYTP",
                "X-VTEX-API-AppToken":"SGLRMYLVUYUVRTOOJGAPSUBTBZIMODTEJTETGNPBCLMBEMXFPMXTKVTDLWCFUEHDNJUJNPODRWLDWFVZDGKSONLCIINAXTIHUYOECVFEMZIGLWNKLMMVEAVVDYAVUNAV",
            }
            fetch(OrderAPIPath, {
              method:'GET',
              headers: OrderHeader
            })
              .then(function(response){
                return response.json();
              })
              .then(function(response){
                console.log(response);
                const { value } = response;
                console.log(value);
              })
            res.sendStatus(201);

        } else {
          //const passKey = 'ping';
          if( hookConfig === 'ping'){
            res.sendStatus(200);

          }else {
            res.status(422).json({"message": "Senha inválida!"});
          }
        }

      }
}

export default hookConfigController;