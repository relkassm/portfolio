import Time from "./MenuContent/Time";
import Items from "./MenuContent/Items";
import Icons from "./MenuContent/Icons";

import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.items}>
        <Items />
      </div>
      <div className={styles.config}>
        <Icons />
        <Time />
      </div>
    </div>
  );
};

export default Menu;
