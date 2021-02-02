import React from 'react';

function App() {

  function handleSubmit(event) {

    event.preventDefault();

    // alert('Legal, você clicou em mim!!!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste de cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome</label>
            <input></input>
          </div>
          <div>
            <label>Sobrenome</label>
            <input></input>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
