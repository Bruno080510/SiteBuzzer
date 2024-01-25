import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="py-28 flex items-center justify-center  bg-[#5927aa] flex-col">
      <Link>
      <a className="flex cursor-pointer text-white font-normal flex-col w-[750px] h-[250px] items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl   bg-amber-500">
          <img
            className="object-fit w-full rounded-t-lg h-[600px] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://img.freepik.com/vetores-gratis/conceito-de-seguranca-na-internet_1284-16813.jpg?t=st=1699924633~exp=1699925233~hmac=2e22837169b7d73e89bb3e4681620b64b6427a44a37179f4ded0a19ef167f51e"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">Firewall e Configurações de Privacidade</h5>
            <p className="mb-3 font-semibold">Ative o firewall do seu dispositivo e ajuste as configurações de privacidade em redes sociais e outros serviços online. Limite a quantidade de informações pessoais compartilhadas publicamente.</p>
          </div>
        </a>
      </Link>
      <div className="flex flex-row space-x-4">
        <Link to="/post">
          <Card
            urlImage="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-testador-de-software_114360-12815.jpg?w=740&t=st=1699884752~exp=1699885352~hmac=1a15f3bc74b381bbc62406fa4ef24f7325a3d7583deb5ebd26c77b6ad189d3ae"
            title="Desvendando os Malwares: O Que São e Como Proteger Seu Computador"
            text="Os malwares representam uma ameaça persistente no mundo digital, podendo comprometer a segurança de computadores e dados pessoais. Neste post, vamos explorar o universo dos malwares, compreendendo o que são, como agem e, o mais importante, como podemos proteger nossos dispositivos contra essas ameaças."
          />
        </Link>
        <Link to="/post1">
        <Card
          title="Vazamentos de Dados: Lições Aprendidas dos Casos Mais Impactantes"
          text="Vazamentos de dados ameaçam a segurança digital, expondo informações confidenciais e afetando usuários globalmente. Exploraremos casos notórios, analisaremos causas e forneceremos medidas práticas para proteger informações pessoais."
          urlImage="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-malware-para-roubo-de-dados_114360-7387.jpg?w=740&t=st=1699885211~exp=1699885811~hmac=00d33545f78423f310e8c61d442a66a09145dc79b2634be41773d6fa5a36f551"
        />
        </Link>
        <Link to="/post2">
          <Card
            title="Firewall e Configurações de Privacidade"
            text="Ative o firewall do seu dispositivo e ajuste as configurações de privacidade em redes sociais e outros serviços online. Limite a quantidade de informações pessoais compartilhadas publicamente."
            urlImage="https://img.freepik.com/vetores-gratis/conceito-de-seguranca-na-internet_1284-16813.jpg?t=st=1699924633~exp=1699925233~hmac=2e22837169b7d73e89bb3e4681620b64b6427a44a37179f4ded0a19ef167f51e"
          />
        </Link>
      </div>
    </div>
  );
}

function Card({ text, title, urlImage }) {
  return (
    <div className="pt-20 pe-3 flex-shrink-0 w-[400px] text-white">
  <div className="h-[500px] max-w-sm border border-gray-200 rounded-lg shadow bg-amber-500 dark:border-gray-700 flex flex-col">
    <a href="#" className="flex-shrink-0">
      <img className="rounded-t-lg w-full h-52 object-cover" src={urlImage} alt="" />
    </a>
    <div className="flex-grow p-5 flex flex-col justify-between">
      <div>
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-medium text-sm ">{text}</p>
      </div>
      <a href="#" className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1B0938] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
</div>

  );
}

export default Blog;
