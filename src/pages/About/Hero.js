import React from "react";

const Hero = () => {
  return (
    <section className="pb-24 pt-48 flex items-center justify-center bg-blue-shade-5/60">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-blue-shade-1">
            Introducing Design Data Platform
          </p>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-blue-shade-2">
            Distribute your brand from&nbsp;design to code
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-500">
            Specify helps you unify your brand identity by collecting, storing
            and distributing design tokens and assets — automatically.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="/contact"
            className=" rounded-md bg-blue-shade-3 px-5 py-3 font-medium text-white hover:bg-blue-shade-2"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
