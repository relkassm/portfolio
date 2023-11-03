import { useState } from "react";

import styles from "../Menu.module.css";

const Icons = () => {
  const [selected, setSelected] = useState("");
  const social = ["linkedin", "github", "instagram", "mail"];
  return (
    <>
      {social.map((item) => (
        <img
          key={social.indexOf(item)}
          className={selected === item ? styles.selected : ""}
          src={`social/${item}.png`}
          alt={item}
          onMouseEnter={() => {
            setSelected(item);
          }}
          onMouseLeave={() => {
            setSelected("");
          }}
        />
      ))}
    </>
  );
};

export default Icons;
