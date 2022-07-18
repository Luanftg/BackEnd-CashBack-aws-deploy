import 'dotenv/config';
const OrderIds = [];
const hookConfigController = {
    ping: (req, res) => {
         
        const { hookConfig } = req.body;
        const { OrderId }  = req.body;   

        if(!hookConfig && !OrderId) {
          //res.status(422).json({"message": "Você precisa enviar uma senha!" });  
          res.status(422).json({"message": "Bad Request!!!" });  
        } else if (OrderId) { 
          OrderIds.push(OrderId);
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