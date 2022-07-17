import 'dotenv/config';

const hookConfigController = {
    ping: (req, res) => {
    
        //const { appkey } = req.headers;   
        console.log(req.body);    
        const { hookConfig } = req.body;        
        console.log(hookConfig); 

        //const passKey = process.env.appKey;
        const appkey = hookConfig;
        if(!appkey) {
          res.status(422).json({"message": "Você precisa enviar uma senha!" });
        } else {
          //const passKey = 'vtex-bitsized';
          const passKey = 'ping';
          if( appkey === passKey){
            res.sendStatus(200);
          }else {
            res.status(422).json({"message": "Senha inválida!"});
          }
        }

      }
}

export default hookConfigController;