import { useState } from 'react';
import { Form, Button, Modal, Card } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Lógica para autenticar o usuário
    console.log('Login realizado com:', email, password);
  };

  const handlePasswordReset = () => {
    // Lógica para recuperação de senha
    console.log('Instruções enviadas para:', resetEmail);
    setShowResetModal(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#343a40' }}>Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ fontWeight: '500', color: '#495057' }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2"
                style={{ borderRadius: '10px' }}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label style={{ fontWeight: '500', color: '#495057' }}>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2"
                style={{ borderRadius: '10px' }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-4" style={{ borderRadius: '10px', backgroundColor: '#007bff', fontWeight: 'bold' }}>
              Entrar
            </Button>
            <Button
              variant="link"
              className="w-100 mt-3"
              onClick={() => setShowResetModal(true)}
              style={{ color: '#007bff', fontWeight: '500' }}
            >
              Esqueceu a senha?
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showResetModal} onHide={() => setShowResetModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar Senha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formResetEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
                className="p-2"
                style={{ borderRadius: '10px' }}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="w-100 mt-3"
              onClick={handlePasswordReset}
              style={{ borderRadius: '10px', backgroundColor: '#007bff', fontWeight: 'bold' }}
            >
              Recuperar Senha
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
