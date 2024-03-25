import Heading from "../heading";
import Image from "next/image";
import React from "react";
import Section from "../section";

function Testimonials() {
  return (
    <Section className="p-6 max-w-screen-laptop mx-auto">
      <Heading subtitle="Hear what People say about us" title="Testimonials" />

      <div className="grid grid-col-1 md:grid-col-3 max-h-fit gap-6">
        {new Array(3).fill(0).map((idx) => (
          <div className="items-stretch h-full max-h-fit relative" key={idx}>
            <div className="h-fit min-w-full text-base flex-1 object-fill grid place-items-center">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                iusto nesciunt hic recusandae quia adipisci, sint earum.
                Impedit, placeat. Qui odio velit fuga eligendi vitae tempore
                tempora, perferendis porro aliquid!
              </p>
            </div>
            <div className="space-y-6 md:pr-10 absolute top-0 rounded-2xl p-4 backdrop-filter hidden peer-focus-within:block bg-[#0028]">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, veritatis. Aspernatur sit adipisci earum odio
              </p>
              <p className="text-xs text-right text-muted">2 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
