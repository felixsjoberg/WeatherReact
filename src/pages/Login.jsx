import LoginForm from "../components/LoginForm";


function Login({ authenticate }) {

  function handleSubmit(formData) {
    authenticate(formData);
  }

  return (
    <LoginForm onSubmit={handleSubmit} />
  );
}

export default Login;
