import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="py-28 flex items-center justify-center flex-col">
      <a className="flex flex-col w-[750px] h-[250px] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-fit w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-it-security-628x353.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </a>
      <div className="flex flex-row space-x-4">
        <Link to="/post">
          <Card
            urlImage="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-testador-de-software_114360-12815.jpg?w=740&t=st=1699884752~exp=1699885352~hmac=1a15f3bc74b381bbc62406fa4ef24f7325a3d7583deb5ebd26c77b6ad189d3ae"
            title="Desvendando os Malwares: O Que São e Como Proteger Seu Computador"
            text="Os malwares representam uma ameaça persistente no mundo digital, podendo comprometer a segurança de computadores e dados pessoais. Neste post, vamos explorar o universo dos malwares, compreendendo o que são, como agem e, o mais importante, como podemos proteger nossos dispositivos contra essas ameaças."
          />
        </Link>
        <Card
          title="Vazamentos de Dados: Lições Aprendidas dos Casos Mais Impactantes"
          text="Vazamentos de dados ameaçam a segurança digital, expondo informações confidenciais e afetando usuários globalmente. Exploraremos casos notórios, analisaremos causas e forneceremos medidas práticas para proteger informações pessoais."
          urlImage="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-malware-para-roubo-de-dados_114360-7387.jpg?w=740&t=st=1699885211~exp=1699885811~hmac=00d33545f78423f310e8c61d442a66a09145dc79b2634be41773d6fa5a36f551"
        />
        <Card
          title="Título do Terceiro Card"
          text="Texto do Terceiro Card. Pode adicionar mais conteúdo aqui conforme necessário."
          urlImage="https://example.com/image3.jpg"
        />
      </div>
    </div>
  );
}

function Card({ text, title, urlImage }) {
  return (
    <div className="pt-20 pe-3 flex-shrink-0 w-[300px]">
      <div className="h-[600px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={urlImage} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{text}</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
