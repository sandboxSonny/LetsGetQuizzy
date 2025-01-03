import { RevealText } from "~/components";

export const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-left md:text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Want to learn <RevealText text="more?" />
          </h1>
          <p className="py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur mollitia veritatis quibusdam quidem nostrum sapiente
            voluptate dolore iure, aspernatur ab aliquid hic libero commodi
            architecto eius porro ducimus voluptatem facere.
          </p>
        </div>
      </div>
    </div>
  );
};
