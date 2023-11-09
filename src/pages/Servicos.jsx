import React, { useState } from 'react';

function Servicos() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [safetyMessage, setSafetyMessage] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/check-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.response_code === 1) {
        setResult(data);
        setSafetyMessage('URL Segura');
      } else if (data.response_code === 0) {
        setResult({ message: 'URL não encontrada no VirusTotal' });
        setSafetyMessage('URL não encontrada no VirusTotal');
      } else {
        setResult({ message: 'Erro ao verificar a URL' });
        setSafetyMessage('Erro ao verificar a URL');
      }
    } catch (error) {
      console.error('Erro ao verificar a URL', error);
      setResult({ message: 'Erro ao verificar a URL' });
      setSafetyMessage('Erro ao verificar a URL');
    }
  };

  return (
    <div className="pt-28 bg-[#1B0938] flex flex-col items-center text-center justify-center">
      <h1 className="text-4xl font-semibold text-white">Verificador de URL</h1>
      <div className="pt-5 justify-center items-center flex flex-col">
        <input
          type="text"
          placeholder="Digite uma URL"
          className="w-[500px] rounded-xl p-3"
          value={url}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="mt-3 w-96 bg-[#F1B711] text-white rounded-xl p-2">
          Verificar
        </button>
      </div>
      {result && (
        <div className="mt-5">
          <h1 className='text-white'>{safetyMessage}</h1>
          {result.message ? <p>{result.message}</p> : <p></p>}
        </div>
      )}
    </div>
  );
}

export default Servicos;
