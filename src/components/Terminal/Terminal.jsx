import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import data from "../../data/data";

import styles from "./Terminal.module.css";
import Command from "./Command";
import Content from "./Content";

const Terminal = ({ window, setWindow, focused, setFocused }) => {
  let list = "";
  const defaultInfo = "available commands: ls - cd - help - exit";
  const helpContent = `Usage: <br /><br />ls&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspList all sections in format [foo]: [bar]<br />cd [foo]&nbsp&nbsp&nbsp&nbspAccess the content of [foo] section<br />help&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspShow commandline usage<br />exit&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspClose the terminal`;
  const inputRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [info, setInfo] = useState(defaultInfo);
  const [command, setCommand] = useState("");
  const [content, setContent] = useState({});

  useEffect(() => {
    setCommand("");
    setContent({});
    setInfo(defaultInfo);
    inputRef.current.focus();
    setFocused(true);
    setReduced(false);
  }, [window, setFocused]);

  const focus = (e) => {
    e.stopPropagation();
    inputRef.current.focus();
    setFocused(true);
  };
  const submitCommand = (e) => {
    e.preventDefault();
    const trimmedCommand = command.trim();
    if (trimmedCommand) {
      executeCommand(trimmedCommand);
    }
    setCommand("");
  };

  const toggleSize = () => {
    setExpanded(!expanded);
  };

  const reduceWindow = () => {
    setReduced(true);
  };

  const executeCommand = (cmd) => {
    const folder = data.find((folder) => folder.name === window.title);
    switch (cmd) {
      case "ls":
        folder.content.forEach((section) => {
          list += `${section.index}: ${section.key} <br />`;
        });
        setContent({ value: list });
        break;
      case "help":
        setContent({ value: helpContent });
        break;
      case "exit":
        setWindow((prevWindow) => ({ ...prevWindow, title: "" }));
        break;
      default:
        if (cmd.startsWith("cd ")) {
          const param = cmd.split(" ")[1];
          const section = folder.content.find(
            (section) =>
              param === section.index ||
              param.toLowerCase() === section.key.toLowerCase()
          );
          if (section) {
            setContent(section);
          } else {
            setContent({ value: "Section not found" });
          }
        } else {
          setContent({ value: "Command not found" });
        }
        break;
    }
  };

  const formatCommand = (cmd) => {
    return cmd.replace(/ /g, "\u00a0");
  };

  return (
    <div
      className={`${styles.window} ${expanded && styles.expanded} ${
        reduced && styles.reduced
      }`}
      onClick={focus}
    >
      <div className={styles.nav}>
        <div
          className={`${styles.round} ${
            focused ? styles.close : styles.blurred
          }`}
          onClick={() =>
            setWindow((prevWindow) => ({ ...prevWindow, title: "" }))
          }
        ></div>
        <div
          className={`${styles.round} ${
            focused ? styles.reduce : styles.blurred
          }`}
          onClick={reduceWindow}
        ></div>
        <div
          className={`${styles.round} ${
            focused ? styles.expand : styles.blurred
          }`}
          onClick={toggleSize}
        ></div>
        <h2 className={styles.title}>{window.title}</h2>
      </div>
      <div className={styles.info}>
        <span>{info}</span>
      </div>
      <div className={styles.main}>
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ color: "#5FFA68", height: "0.8vw" }}
        />
        <strong>{window.title}</strong>
        <pre className={styles.command}>{formatCommand(command)}</pre>
        <img src={focused ? "/caret.png" : "/caret-def.png"} alt="caret" />
      </div>
      <Content content={content} />
      <Command
        command={command}
        setCommand={setCommand}
        inputRef={inputRef}
        submitCommand={submitCommand}
      />
    </div>
  );
};

export default Terminal;
