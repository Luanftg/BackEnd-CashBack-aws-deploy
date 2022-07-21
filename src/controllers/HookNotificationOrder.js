import 'dotenv/config';
import fetch from 'node-fetch'; 
import masterDataSearch from '../midlewares/masterDataSearch.js'
import SearchEmail from '../midlewares/SearchEmail.js';
//import masterDataUpdate from '../midlewares/masterDataUpdate.js';

const hookNotificationOrder = {
    getId: (req, res) => {
      const { OrderId }  = req.body; 
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
                const { value } = response;
                //const document = response.clientProfileData.document;
                const userId = response.clientProfileData.userProfileId;
                //console.log(userId);

                SearchEmail(userId, value);
                    })     
                res.sendStatus(201);
    }
  }
export default hookNotificationOrder;