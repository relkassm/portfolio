import Menu from "./components/Menu/Menu";
import Desktop from "./components/Desktop";
import Dock from "./components/Dock/Dock";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Desktop />
      <Dock />
    </div>
  );
};

export default App;
