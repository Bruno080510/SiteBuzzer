import React from 'react';

function Post() {

  return (
    <div className='pt-28 flex-col px-40'>
                    <div>
                        <h1 className=' text-5xl font-bold pb-5'>O Que São Malwares?</h1>
                        <p className=' text-2xl pb-5'>Malwares, uma contração de "software malicioso," referem-se a programas ou códigos de computador desenvolvidos com a intenção de causar danos, roubar informações confidenciais ou obter acesso não autorizado a sistemas. 
                            Essas ameaças podem assumir diversas formas, incluindo vírus, worms, trojans, spyware, ransomware e adware.</p>
                    </div>
                    <div>
                        <h1 className=' text-5xl font-bold pb-5'>Como os Malwares Agem:</h1>
                        <p className=' text-2xl pb-8'>Malwares, uma contração de "software malicioso," referem-se a programas ou códigos de computador desenvolvidos com a intenção de causar danos, roubar informações confidenciais ou obter acesso não autorizado a sistemas. 
                            Essas ameaças podem assumir diversas formas, incluindo vírus, worms, trojans, spyware, ransomware e adware.</p>
                    </div>
                    <div>
                        
                            <ol className='text-2xl list-decimal flex items-center justify-center flex-col px-48	'>
                                <li className='pb-3'>
                                     Vírus: Se espalham ao infectar outros programas e arquivos, muitas vezes exigindo a interação do usuário para se propagarem.
                                </li>
                                
                                <li className='pb-3'>
                                 Worms: Diferenciam-se dos vírus por sua capacidade de se espalhar automaticamente, explorando vulnerabilidades em sistemas conectados em rede.    
                                </li>
                                <li className='pb-3'>
                                 Trojans: Disfarçam-se como software legítimo para enganar os usuários e, uma vez instalados, abrem portas para ameaças adicionais.
                                </li>
                                <li className='pb-3'>
                                     Spyware: Monitoram atividades do usuário sem seu conhecimento, coletando informações pessoais.
                                </li>
                                <li className='pb-3'>
                                Ransomware: Criptografam dados e exigem pagamento para restaurar o acesso, representando uma ameaça séria para empresas e usuários individuais.
                                </li>
                                <li className='pb-3'>
                                Adware: Exibe anúncios intrusivos e, em alguns casos, pode coletar dados de navegação.

                                </li>
                            </ol>
                        </div>

    </div>
  );
}

export default Post;
