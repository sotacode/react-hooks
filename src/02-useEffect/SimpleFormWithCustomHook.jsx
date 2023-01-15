import { useForm } from "../hooks/useForm";


export const SimpleFormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    const {username, email, password} = formState


    return (
        <div className="hookCard">
            <h2>useForm - Custom Hook</h2>
            <hr />
            <p>This is a custom hook to maintain the state of a form.</p>
            <h5>Simple Form</h5>
            <input
                type="text"
                className="form-control mt-2 inputForm"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2 inputForm"
                placeholder="nelson.rivera@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2 inputForm"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary">Reset</button>

        </div>
    )
}
