import React, { useState, useRef, useEffect } from 'react';
import './FormularioCadastro.css';

function FormularioCadastro() {
    // Estados para os campos do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');

    // Referência para o campo de nome
    const nomeRef = useRef(null);

    // useEffect para dar foco ao campo de nome ao montar o componente
    useEffect(() => {
        nomeRef.current.focus()
    }, []);

    // Função para lidar com o envio do formulário
    const handleSumit = (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (!nome || !email || !idade) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Exibe os dados do formulário
        alert(`Dados informados:
            Nome: ${nome}
            Email: ${email}
            Idade: ${idade}`);

        // Limpa os campos do formulário
        setNome('');
        setEmail('');
        setIdade('');

        // Retorna o foco para o campo de nome
        nomeRef.current.focus();
    };

    return (
        <form className="form-container" onSubmit={handleSumit}>
            <h2>Cadastro de Usuários</h2>

            <label>Nome:</label>
            <input
                type="text"
                ref={nomeRef}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
            />

            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
            />


            <label>Idade:</label>
            <input
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                placeholder="Digite sua idade"
            />


            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormularioCadastro;