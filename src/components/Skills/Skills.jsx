import { PiBracketsCurlyBold } from "react-icons/pi";
import { BsHddNetwork } from "react-icons/bs";
import { FaSwatchbook } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills section anime" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>
      <div className="skills__container cus_container cus_grid">
        {/* Skils Part 1 */}
        <div className="skills__content skills__open">
          <div className="skills__header">
            <PiBracketsCurlyBold className="skills__icon" />
            <div>
              <h1 className="skills__titles">Fronted developer</h1>
              <span className="skills__subtitle">More than 4 Years</span>
            </div>
            <FaAngleDown className="skills__arrow"/>
          </div>
          <div className="skills__list cus_grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__html" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__css" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__javascript" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Next.js</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react" />
              </div>
            </div>
          </div>
        </div>
        {/* Skils Part 2 */}
        <div className="skills__content skills__close">
          <div className="skills__header">
            <BsHddNetwork className="skills__icon" />
            <div>
              <h1 className="skills__titles">Backend developer</h1>
              <span className="skills__subtitle">More than 2 Years</span>
            </div>
            <FaAngleDown className="skills__arrow"/>
          </div>
          <div className="skills__list cus_grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Mongo DB</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__mongo" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Express</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__express" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Next.js</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__node" />
              </div>
            </div>
          </div>
        </div>
        {/* Skils Part 3 */}
        <div className="skills__content skills__close">
          <div className="skills__header">
            <FaSwatchbook className="skills__icon"/>
            <div>
              <h1 className="skills__titles">Other Things</h1>
              <span className="skills__subtitle">More than 1 Years</span>
            </div>
            <FaAngleDown className="skills__arrow"/>
          </div>
          <div className="skills__list cus_grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">RTK Redux tool kit</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__figma" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Socket.io</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__sketch" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">PhotoShop</h3>
                <span className="skills__number">20%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__photoshop" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Figma</h3>
                <span className="skills__number">35%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__illustrator" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
