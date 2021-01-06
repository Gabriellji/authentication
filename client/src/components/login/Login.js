import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault();
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => {
                if (res.status === 200) {
                    res.json()
                        .then(data => {
                            localStorage.setItem('token', data.token)
                        })
                    history.push("/");
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Email
                    <input name="email" type="email" placeholder="Email" />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                    <input name="password" type="password" placeholder="Password" />
                    </label>
                </div>
                <button type="submit">Log In</button>
            </form>
        </>
    )
}


export default Login;