import Menu from "./components/Menu/Menu";
import Folders from "./components/Folders/Folders";
import Dock from "./components/Dock/Dock";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Folders />
      <Dock />
    </div>
  );
};

export default App;
