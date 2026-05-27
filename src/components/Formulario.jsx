import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form style={{ maxWidth: '500px' }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Digite o E-mail" />
          <Form.Text className="text-muted">
            Não iremos compartilhar o seu E-mail com ninguém.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Escplha sua senha" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirme a Senha</Form.Label>
          <Form.Control type="password" placeholder="Confirme a sua senha" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>

      </Form>
    </div>
  )
}

export default Formulario
