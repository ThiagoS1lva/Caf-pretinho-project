import styles from '../styles/contato/Form.module.css'

export default function Form() {

    return (
        <div className={styles.container}>
        <h1>Nos mande uma mensagem!</h1>
            <form className={styles.formulario}>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Digite seu nome" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu email" required />
                <label htmlFor="mensagem">Mensagem</label>
                <textarea placeholder="Digite sua mensagem" id="mensagem" required />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}