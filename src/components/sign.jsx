import {Link} from 'react-router-dom'

const sign = () => {
    return (
        <main className='login'>
            <section>
                <h1>Cadastre-se</h1>

                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" />

                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="" />

                <label htmlFor="confirmPassword">Confirmação de senha</label>
                <input type="password" name="confirmPassword" id="" />

                <button type="submit">Cadastrar</button>


                <p>Já tem uma conta? <Link to='/login'>Login</Link></p>


            </section>

        </main>
    )
}

export default sign