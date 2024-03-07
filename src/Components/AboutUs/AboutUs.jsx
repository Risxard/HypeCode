import "./AboutUs.css";

import { Heart, Lightbulb, Star } from "lucide-react";

function AboutUs() {
  return (
    <section className="AboutUs" id="about">
      <div>
        <h2>
          Sobre <strong>nós</strong>
        </h2>
        <p>
          Somos uma agência de desenvolvimento web comprometida em oferecer
          soluções digitais de qualidade. Com uma equipe diversificada e
          experiente, combinamos criatividade e tecnologia para atender às
          necessidades específicas de nossos clientes. Estamos dedicados a
          transformar suas ideias em produtos digitais eficientes e impactantes.
        </p>
      </div>

      <section className="cards-about-container">
        <div className="card-about">
          <Heart />

          <div>
            <h3>Paixão</h3>

            <p>
              A paixão da nossa equipe é criar experiências digitais
              excepcionais que deixem uma marca duradoura. Movidos pela inovação
              e pela busca incessante da excelência, estamos empenhados em
              superar expectativas e impulsionar o sucesso de nossos clientes
              através de soluções tecnológicas inspiradoras.
            </p>
          </div>
        </div>
        <div className="card-about">
          <Lightbulb />

          <div>
            <h3>Criatividade</h3>

            <p>
              Nossa equipe é impulsionada pela criatividade inovadora,
              transformando conceitos em realidade digital. Combinando
              habilidades técnicas e visão artística, criamos soluções únicas e
              impactantes que destacam nossos clientes no mercado. Estamos
              constantemente buscando novas formas de inspirar e surpreender
              através da tecnologia.
            </p>
          </div>
        </div>
        <div className="card-about">
          <Star />

          <div>
            <h3>Qualidade</h3>

            <p>
              Nossa agência é reconhecida pela excelência e qualidade dos
              projetos que entregamos. Com um compromisso inabalável com os mais
              altos padrões de desenvolvimento, garantimos soluções robustas e
              confiáveis que superam as expectativas dos nossos clientes. Cada
              projeto é cuidadosamente executado para garantir resultados
              excepcionais
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutUs;
