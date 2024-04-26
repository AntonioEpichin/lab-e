export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, password } = req.body;
      // Aqui você implementaria a criação de um novo usuário no seu sistema
  
      // Placeholder para sucesso no registro
      res.status(201).json({ message: 'Registro bem-sucedido', user: { name, email } });
    } else {
      // Método não suportado
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} Não Permitido`);
    }
  }