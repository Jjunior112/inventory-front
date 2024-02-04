import {Link} from 'react-router-dom'


const home = () => {
  return (
    <main className='login'>
      <section>
        <h1>Entrar</h1>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />

        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="" />

        <button type="submit">Entrar</button>


        <p>Ainda não tem uma conta? <Link to='/signin'>Cadastre-se</Link></p>


      </section>

    </main>
  )
}

export default home