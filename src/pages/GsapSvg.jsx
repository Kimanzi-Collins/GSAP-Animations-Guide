import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const GsapSvg = () => {
  useGSAP(() => {
    // Animate the SVG circle
    gsap.to("#svg-circle", {
      attr: { cx: 250, cy: 150, r: 60 },
      fill: "#3b82f6",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Animate the SVG rectangle
    gsap.to("#svg-rect", {
      attr: { width: 120, height: 120, rx: 20 },
      fill: "#22c55e",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "elastic.out(1, 0.3)",
      delay: 0.5,
    });

    // Animate the SVG path (star) with rotation and scale
    gsap.to("#svg-star", {
      rotation: 360,
      scale: 1.3,
      transformOrigin: "center center",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate the SVG line with drawSVG-like effect using strokeDashoffset
    gsap.fromTo(
      "#svg-line",
      { strokeDasharray: 300, strokeDashoffset: 300 },
      {
        strokeDashoffset: 0,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <main>
      <h1>GsapSvg</h1>

      <p className="mt-5 text-gray-500">
        GSAP can animate SVG elements and their attributes, making it easy to
        create dynamic and interactive vector graphics. You can animate
        properties like <code>fill</code>, <code>stroke</code>,{" "}
        <code>transform</code>, and SVG-specific attributes such as{" "}
        <code>cx</code>, <code>cy</code>, and <code>r</code>.
      </p>
      <p className="mt-5 text-gray-500">
        Below are examples of animating SVG shapes including circles,
        rectangles, stars, and lines using <code>gsap.to()</code> and{" "}
        <code>gsap.fromTo()</code>.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/CorePlugins/AttrPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          GSAP SVG animations
        </a>{" "}
        and the AttrPlugin.
      </p>

      <div className="mt-20 flex flex-col items-center gap-10">
        {/* Animated Circle */}
        <svg width="400" height="200" viewBox="0 0 400 200">
          <circle
            id="svg-circle"
            cx={150}
            cy={100}
            r={40}
            fill="#ef4444"
          />
        </svg>

        {/* Animated Rectangle */}
        <svg width="400" height="200" viewBox="0 0 400 200">
          <rect
            id="svg-rect"
            x={140}
            y={50}
            width={80}
            height={80}
            rx={10}
            fill="#8b5cf6"
          />
        </svg>

        {/* Animated Star */}
        <svg width="400" height="200" viewBox="0 0 400 200">
          <polygon
            id="svg-star"
            points="200,20 230,80 300,85 245,130 260,200 200,165 140,200 155,130 100,85 170,80"
            fill="#f59e0b"
          />
        </svg>

        {/* Animated Line */}
        <svg width="400" height="200" viewBox="0 0 400 200">
          <path
            id="svg-line"
            d="M 50 100 Q 150 20 200 100 Q 250 180 350 100"
            stroke="#06b6d4"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
    </main>
  );
};

export default GsapSvg;
