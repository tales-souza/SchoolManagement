import jwt from 'jsonwebtoken';
import user from '../models/User'

export default async(req,res,next) => {
  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({ errors: ['login required'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const verifyUser = await user.findOne({where : {
      id,
      email
    }
    })
    
    if(!verifyUser){
      return res.status(401).json({ errors: ['Usuário Inválido'] });
    };

    req.userId = id;
    req.userEmail = email;
    next();
  } catch (e) {
    return res.status(401).json({ errors: ['token expirado ou inválido'] });
  }
}
