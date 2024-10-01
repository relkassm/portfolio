import Folder from "./Folder";
import styles from "./Folders.module.css";

const Folders = ({ setWindow, clicked, setClicked }) => {
  const folders = [
    { id: 1, title: "Background", content: "Background" },
    { id: 2, title: "1337", content: "1337" },
    { id: 3, title: "IM Creation", content: "IM Creation" },
    { id: 4, title: "Ark-x", content: "Ark-x" },
  ];
  return (
    <div className={styles.folders}>
      {folders.map((folder) => (
        <Folder
          key={folder.id}
          title={folder.title}
          content={folder.content}
          setWindow={setWindow}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </div>
  );
};

export default Folders;
