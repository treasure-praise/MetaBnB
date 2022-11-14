import React from "react";
import Place from "./Place";
import Img1 from "../assets/a.svg";
import Img2 from "../assets/b.svg";
import Img3 from "../assets/c.svg";
import Img4 from "../assets/d.svg";
import Img5 from "../assets/e.svg";
import Img6 from "../assets/f.svg";
import Img7 from "../assets/g.svg";
import Img8 from "../assets/h.svg";

const Places = () => {
  return (
    <section className="px-24  mb-11">
      <div className="grid-cols-4 grid gap-6 mx-auto">
        <Place img={Img1} />
        <Place img={Img2} />
        <Place img={Img3} />
        <Place img={Img4} />
        <Place img={Img5} />
        <Place img={Img6} />
        <Place img={Img7} />
        <Place img={Img8} />
      </div>
    </section>
  );
};

export default Places;
