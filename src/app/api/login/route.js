export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      // Aqui você implementaria a verificação das credenciais do usuário
      // e retornaria um token de sessão ou um erro se as credenciais estiverem incorretas
  
      // Placeholder para sucesso no login
      res.status(200).json({ message: 'Login bem-sucedido', user: { email } });
    } else {
      // Método não suportado
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} Não Permitido`);
    }
  }