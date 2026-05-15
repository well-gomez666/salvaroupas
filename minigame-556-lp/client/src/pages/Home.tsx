import { useState } from 'react';
import { ChevronDown, Check, Play, Pause } from 'lucide-react';

/**
 * SalvaRoupa - Landing Page
 * Design: Moderno, limpo, dinâmico com tom de limpeza e refrescância
 * Paleta: #24B7B0 (teal), #B8FAF3 (aqua claro), #E7F0F5 (azul claro), #FFFFFF, #2A3C46 (cinza escuro)
 * Tipografia: Séria, profissional, sem cursivas
 */

export default function Home() {
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [selectedKit, setSelectedKit] = useState('2');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-[#2A3C46]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E7F0F5]">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-[#24B7B0]">SalvaRoupa</div>
          <div className="flex gap-4">
            <a href="#faq" className="text-sm font-medium hover:text-[#24B7B0] transition">Dúvidas</a>
            <a href="#comprar" className="text-sm font-medium hover:text-[#24B7B0] transition">Comprar</a>
          </div>
        </div>
      </header>

      {/* Hero - Vídeo VSL */}
      <section className="bg-gradient-to-b from-[#E7F0F5] to-white py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Vídeo Container */}
            <div className="relative bg-[#2A3C46] rounded-lg overflow-hidden shadow-lg mb-8" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/W4VTq0sa9yg?autoplay=1&mute=1"
                title="SalvaRoupa VSL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>

            {/* CTA Principal */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2A3C46] leading-tight">
                Elimine o mau cheiro de suor das suas roupas em minutos
              </h1>
              <p className="text-lg text-[#2A3C46]/70 mb-8">
                Sem manchar, sem danificar, aprovado pela ANVISA
              </p>
              <button className="bg-[#24B7B0] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1a8a82] transition shadow-lg">
                Quero experimentar agora
              </button>
            </div>

            {/* Benefícios */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                'Remove o "cecê" na origem',
                'Aprovado pela ANVISA',
                'Não mancha e não danifica',
                '+32.000 clientes reais',
                'Garantia de 30 dias',
                'Biodegradável'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#24B7B0] flex-shrink-0" />
                  <span className="text-[#2A3C46]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problema - Seção Descritiva */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-[#2A3C46]">
            Você lava, passa, usa amaciante… e o mau cheiro continua lá
          </h2>
          
          <div className="space-y-6 text-lg text-[#2A3C46]/80 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-[#24B7B0] mb-2">A sensação é sempre a mesma</h3>
              <p>Você veste a roupa achando que está tudo bem. Levanta o braço em algum momento. E sente aquele cheiro familiar voltando.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#24B7B0] mb-2">Você não sente, mas as outras pessoas sentem</h3>
              <p>É um constrangimento silencioso que afeta sua autoestima, confiança, imagem e vida social.</p>
            </div>

            <div className="bg-[#E7F0F5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#24B7B0] mb-4">Por que sabão em pó não resolve?</h3>
              <p className="mb-4">Porque não é "cheiro". É <strong>bactéria presa dentro das fibras do tecido.</strong></p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#24B7B0] font-bold">•</span>
                  <span><strong>Sobrevivem</strong> à lavagem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#24B7B0] font-bold">•</span>
                  <span><strong>Impregnam</strong> o tecido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#24B7B0] font-bold">•</span>
                  <span><strong>Reativam o odor</strong> do corpo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-16 bg-[#B8FAF3]/20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#2A3C46]">A solução é tratar o tecido</h2>
            <p className="text-lg text-[#2A3C46]/70">Não apenas lavar</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-[#E7F0F5]">
            <h3 className="text-2xl font-bold text-[#24B7B0] mb-6">Conheça o SalvaRoupa ®</h3>
            <p className="text-lg text-[#2A3C46] mb-6">
              O spray anti-odor aprovado pela ANVISA que elimina as bactérias impregnadas no tecido em poucos minutos.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#2A3C46]">
                <Check className="w-6 h-6 text-[#24B7B0]" />
                <span>Sem manchar</span>
              </li>
              <li className="flex items-center gap-3 text-[#2A3C46]">
                <Check className="w-6 h-6 text-[#24B7B0]" />
                <span>Sem agredir a pele</span>
              </li>
              <li className="flex items-center gap-3 text-[#2A3C46]">
                <Check className="w-6 h-6 text-[#24B7B0]" />
                <span>Sem danificar suas roupas</span>
              </li>
            </ul>
            <p className="text-center text-[#24B7B0] font-bold mt-6">Simples, Rápido, Eficaz e Comprovado</p>
          </div>
        </div>
      </section>

      {/* Como usar */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2A3C46]">Como usar o SalvaRoupa ®</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Posicione a peça', desc: 'Deixe as áreas mais críticas expostas (axilas, gola, mangas)' },
              { num: '2', title: 'Borrife', desc: 'Aplique diretamente nas partes onde o suor impregna' },
              { num: '3', title: 'Aguarde secar', desc: 'De preferência, em local arejado' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-[#24B7B0] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-[#2A3C46] mb-2">{step.title}</h3>
                <p className="text-[#2A3C46]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-[#E7F0F5]">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2A3C46]">
            +32.000 clientes e 97% de satisfação
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Carlos, 38 Anos', text: 'Trabalho o dia inteiro fora e chego em casa com as roupas impregnadas de suor. Depois que comecei a usar esse produto, minhas roupas ficam realmente limpas e sem cheiro nenhum.' },
              { name: 'Renata, 41 Anos', text: 'Tenho dois filhos adolescentes e quem é mãe sabe como o cheiro de suor gruda nas roupas. Esse salva-roupa resolveu um problema que eu já achava que não tinha solução.' },
              { name: 'Elaine, 37 Anos', text: 'Já fiquei constrangida perto de outras pessoas achando que o cheiro vinha de mim, mas era da roupa. Hoje fico tranquila porque sei que minhas roupas não têm mais mau cheiro.' },
              { name: 'Amilton, 42 Anos', text: 'Suo muito e todas minhas roupas tinham cheiro de suor. Agora com esse produto fiquei livre desse incômodo porque melhorou demais minhas roupas.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-[#B8FAF3]">
                <p className="text-[#2A3C46] mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-[#24B7B0]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kits */}
      <section id="comprar" className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2A3C46]">
            Escolha seu kit e economize mais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { id: '1', units: '1 UNIDADE', price: 89.90, original: 119.90, installments: '12X de 8,90', save: null },
              { id: '2', units: '2 UNIDADES', price: 139.90, original: 179.80, installments: '12X de 13,90', save: 'R$ 39,90', badge: 'Mais vendido' },
              { id: '3', units: '3 UNIDADES', price: 189.90, original: 269.70, installments: '12X de 18,90', save: 'R$ 79,80', badge: 'Melhor Oferta' }
            ].map((kit) => (
              <div 
                key={kit.id}
                onClick={() => setSelectedKit(kit.id)}
                className={`p-6 rounded-lg border-2 cursor-pointer transition ${
                  selectedKit === kit.id 
                    ? 'border-[#24B7B0] bg-[#B8FAF3]/10' 
                    : 'border-[#E7F0F5] hover:border-[#B8FAF3]'
                }`}
              >
                {kit.badge && (
                  <div className="bg-[#24B7B0] text-white px-3 py-1 rounded text-xs font-bold mb-3 inline-block">
                    {kit.badge}
                  </div>
                )}
                <h3 className="font-bold text-[#2A3C46] mb-2">{kit.units}</h3>
                <div className="mb-4">
                  <div className="text-sm text-[#2A3C46]/60 line-through">R$ {kit.original.toFixed(2)}</div>
                  <div className="text-3xl font-bold text-[#24B7B0]">R$ {kit.price.toFixed(2)}</div>
                  {kit.save && <div className="text-sm text-green-600 font-bold">Economize {kit.save}</div>}
                </div>
                <div className="text-sm text-[#2A3C46]/70 mb-4">{kit.installments}</div>
                <button className="w-full bg-[#24B7B0] text-white py-3 rounded font-bold hover:bg-[#1a8a82] transition">
                  Comprar agora
                </button>
              </div>
            ))}
          </div>

          <div className="bg-[#E7F0F5] p-8 rounded-lg text-center">
            <p className="text-[#2A3C46] mb-4">
              <strong>Experimente por 30 Dias</strong>
            </p>
            <p className="text-[#2A3C46]/80">
              Se você usar o SalvaRoupa durante 30 dias e não notar melhora real no mau cheiro das suas roupas…
            </p>
            <p className="font-bold text-[#24B7B0] mt-4">
              Nós devolvemos 100% do seu dinheiro. Sem perguntas. Sem burocracia.
            </p>
            <p className="text-[#2A3C46]/70 mt-2">O risco é nosso. O resultado é seu.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-[#B8FAF3]/10">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2A3C46]">Dúvidas frequentes</h2>
          
          <div className="space-y-4">
            {[
              { id: 'q1', q: 'O SalvaRoupa funciona mesmo?', a: 'Sim! Com mais de 32.000 clientes satisfeitos e 97% de taxa de satisfação, o SalvaRoupa é comprovadamente eficaz.' },
              { id: 'q2', q: 'Qual a composição do produto?', a: 'O SalvaRoupa é um spray anti-odor aprovado pela ANVISA com fórmula biodegradável e segura para todos os tipos de tecido.' },
              { id: 'q3', q: 'Posso aplicar em qualquer tecido?', a: 'Sim, o SalvaRoupa é seguro para todos os tipos de tecido, desde algodão até sintéticos.' },
              { id: 'q4', q: 'Qual o kit mais vendido?', a: 'O kit com 2 unidades é o mais vendido, oferecendo o melhor custo-benefício para a maioria dos clientes.' },
              { id: 'q5', q: 'Qual o prazo de entrega?', a: 'Oferecemos frete grátis com entrega em até 7 dias úteis para todo o Brasil.' },
              { id: 'q6', q: 'Se eu não gostar posso devolver?', a: 'Sim! Temos garantia de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.' }
            ].map((item) => (
              <div key={item.id} className="border border-[#E7F0F5] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-[#E7F0F5] transition"
                >
                  <span className="font-bold text-[#2A3C46]">{item.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#24B7B0] transition ${expandedFaq === item.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === item.id && (
                  <div className="p-4 bg-[#B8FAF3]/10 border-t border-[#E7F0F5]">
                    <p className="text-[#2A3C46]/80">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A3C46] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">SalvaRoupa</h3>
              <p className="text-white/70">Elimine o mau cheiro de suor das suas roupas em minutos.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <p className="text-white/70">atendimento@salvaroupa.com.br</p>
              <p className="text-white/70">(34) 9 9995-0003</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <p className="text-white/70">CNPJ: 48.607.202/0001-22</p>
              <p className="text-white/70">© 2026 SalvaRoupa® - Todos os Direitos Reservados</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>Política de Privacidade | Termos de Serviço</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
