import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
        Myself Muhammad Adnan and I'm a Frontend Developer having an Experience of more than 5 Years. Two things I can't live
        without Coffee and Coding😎<br />
        "I write code, love code, live code."
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)",
  };
  return (
    <>
      <p>
        I am Programming enthusiast and fullstack Web developer.
        <br />
        <br />
        Currently pursuing my Master (Solution Architect) degree in Computer Science and honestly
        engineering is fun 😅.
        <br />Currently I'm working for{" "}
        <a
          href="https://www.thetechresource.com/"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          Abacusoft LLC
        </a>{" "}
        Where we post all tech news for techies.
        <br />
        <br />I love exploring different kind of fields and I do 3d-designing
        and animations in Blender. And I have few good{" "}
        <a
          href="https://github.com/adnan-muhammadi"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          projects on Github
        </a>{" "}
        too. Definitely check those out.
        <br />
        <br />
        At last, Feel free to{" "}
        <a href="/contact" style={style}>
          Contact ME.
        </a>{" "}
        We can listen to good POP music together 🎧.
      </p>
    </>
  );
};
