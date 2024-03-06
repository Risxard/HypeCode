import "./AboutUs.css";

import { Heart, Lightbulb, Star} from "lucide-react";

function AboutUs() {
  return (
    <section className="AboutUs">
      <div>
        <h2>
          About <strong>us</strong>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolore repellendus dolores! Provident, expedita nesciunt odit
          blanditiis placeat dicta molestias voluptates modi, velit vero nisi
          ab. Atque hic recusandae, quaerat, animi consequatur nostrum fuga eos
          ea optio rem obcaecati aut?
        </p>
      </div>

      <section className="cards-about-container">
        <div className="card-about">
        <Heart />

          <div>
            <h3>Passion</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              ex, autem quod earum quasi vitae vero ducimus! Ex, ducimus harum.
            </p>
          </div>
        </div>
        <div className="card-about">
        <Lightbulb />

          <div>
            <h3>Creativity</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              ex, autem quod earum quasi vitae vero ducimus! Ex, ducimus harum.
            </p>
          </div>
        </div>
        <div className="card-about">
        <Star />

          <div>
            <h3>Quality</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              ex, autem quod earum quasi vitae vero ducimus! Ex, ducimus harum.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutUs;
