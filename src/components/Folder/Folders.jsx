import Folder from "./Folder";
import styles from "./Folders.module.css";

const Folders = ({ setTitle, clicked, setClicked }) => {
  const folders = [
    { id: 1, value: "Background" },
    { id: 2, value: "1337" },
    { id: 3, value: "IM Creation" },
    { id: 4, value: "ARK X" },
    { id: 5, value: "Projects" },
  ];
  return (
    <div className={styles.folders}>
      {folders.map((folder) => (
        <Folder
          key={folder.id}
          name={folder.value}
          setTitle={setTitle}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </div>
  );
};

export default Folders;
