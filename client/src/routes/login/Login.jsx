import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return(
        <div className='bg-dark vh-100 d-flex justify-content-center align-items-center text-light'>
          <div className='col-3'>
          <h1 className='text-center'>Welcome!</h1>
          <Form >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Remember Me" /> */}
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Sign In
                  </Button>
                </Form>
          </div>
        </div>
    )
}

export default Login