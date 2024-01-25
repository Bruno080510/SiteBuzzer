import React, { useEffect } from 'react';

function Post2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
        <div className=' pt-[110px] flex-col bg-[#5927aa] text-white px-40'>
      <div>
        <h1 className='text-4xl font-bold pb-8'>
          Vazamentos de Dados: Lições Aprendidas dos Casos Mais Impactantes
        </h1>
      </div>

      <div>
        <p className='text-xl pb-8'>
          O aumento dos vazamentos de dados é uma preocupação crescente na era digital,
          onde informações sensíveis podem ser comprometidas, resultando em sérias
          consequências para indivíduos e organizações.
        </p>
      </div>

      <div>
        <p className='text-xl pb-8'>
          Examinar casos impactantes de vazamentos de dados oferece insights valiosos sobre
          as vulnerabilidades existentes e as lições que podemos aprender para reforçar
          nossa postura de segurança.
        </p>

        <p className='text-xl pb-5'>
          Um exemplo notável é o vazamento ocorrido na [Empresa X], onde milhões de
          registros de clientes foram comprometidos devido a uma falha na segurança do
          sistema.
        </p>
        <p className='text-xl pb-8'>
          Outro caso impactante envolveu [Organização Y], que enfrentou consequências
          significativas após a exposição de informações confidenciais de seus usuários.
        </p>
      </div>

      <img src="" alt="" srcset="" />

      <div>
        <p className='text-xl pb-8'>
          A partir desses casos, podemos extrair várias lições cruciais para fortalecer a
          segurança de dados:
        </p>

        <ul className='text-xl list-disc pl-8 pb-8'>
          <li>Implementar medidas robustas de segurança cibernética.</li>
          <li>Conduzir auditorias regulares de segurança para identificar vulnerabilidades.</li>
          <li>
            Educar os usuários sobre práticas seguras, como o uso de senhas fortes e a
            conscientização sobre phishing.
          </li>
          {/* Adicionar mais lições conforme necessário */}
        </ul>
      </div>

      <div>
        <h2 className='text-2xl font-bold pb-5'>Conclusão:</h2>
        <p className='text-xl pb-8'>
          Os vazamentos de dados servem como lembretes impactantes de que a segurança da
          informação é uma responsabilidade coletiva. Aprender com esses incidentes
          fortalece nossa capacidade de proteger dados valiosos e preservar a confiança do
          público.
        </p>
      </div>
    </div>
  );
}

export default Post2;
