import 'dotenv/config';

const hookConfigController = {
    ping: (req, res) => {
    
        const { appkey } = req.headers;        

        const passKey = process.env.appKey;

        if( appkey === passKey){
          res.sendStatus(200);
        }else{
          res.status(422).json({"message": "Senha inválida!"});
        }
      }
}

export default hookConfigController;