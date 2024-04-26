export default function handler(req, res) {
    if (req.method === 'POST') {
      // Aqui você implementaria a lógica para encerrar a sessão do usuário
  
      // Placeholder para sucesso no logout
      res.status(200).json({ message: 'Logout bem-sucedido' });
    } else {
      // Método não suportado
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} Não Permitido`);
    }
  }