import React, { useEffect } from 'react';

function Post3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='pt-28 flex-col bg-[#5927aa] text-white px-40'>
      <div>
        <h1 className='text-4xl font-bold pb-8'>
          Firewall e Configurações de Privacidade: Maximizando a Segurança Online
        </h1>
      </div>

      <div>
        <p className='text-xl pb-8'>
          Em um mundo digital cada vez mais interconectado, a implementação de medidas
          como firewalls e configurações de privacidade tornou-se essencial para proteger
          dados sensíveis e garantir uma experiência online segura.
        </p>
      </div>

      <div>
        <h2 className='text-2xl font-bold pb-5'>Firewall: Guardião Virtual:</h2>
        <p className='text-xl pb-8'>
          O firewall atua como um guardião virtual, monitorando e controlando o tráfego de
          dados entre redes. Essa barreira de segurança desempenha um papel crucial na
          prevenção de acessos não autorizados e na detecção de atividades maliciosas.
        </p>
      </div>

      <div>
        <h2 className='text-2xl font-bold pb-5'>Configurações de Privacidade:</h2>
        <p className='text-xl pb-8'>
          Configurações de privacidade adequadas são a base para proteger informações
          pessoais. Desde a gestão de permissões de aplicativos até a escolha de configurações
          de compartilhamento de dados, cada decisão contribui para uma experiência online
          mais segura.
        </p>

        <ul className='text-xl list-disc pl-8 pb-8'>
          <li>Rever e ajustar configurações de privacidade em redes sociais.</li>
          <li>Limitar o acesso a informações pessoais em aplicativos e serviços.</li>
          <li>
            Utilizar navegadores com configurações avançadas de privacidade para bloquear
            rastreadores.
          </li>
          {/* Adicionar mais dicas conforme necessário */}
        </ul>
      </div>

      <div>
        <h2 className='text-2xl font-bold pb-5'>Maximizando a Segurança:</h2>
        <p className='text-xl pb-8'>
          Ao integrar firewalls robustos e ajustar configurações de privacidade de maneira
          proativa, os usuários podem maximizar a segurança online, protegendo-se contra
          ameaças cibernéticas e preservando sua privacidade digital.
        </p>
      </div>
    </div>
  );
}

export default Post3;
