import {
  faT,
  faCode,
  faAlignCenter,
  faListUl,
  faListOl,
  faAt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { RiSingleQuotesL } from "react-icons/ri";
import styles from "../styles/sideTool.module.scss";
import classNames from "classnames/bind";

const totalContentState = {
  title: ["h2", "h3", "p"],
  quote: ["quote1", "quote2", "p"],
  code: ["code", "p"],
  alignment: ["center", "right", "left"]
};

export default function SideTool() {
  const [paragraph, setParagraph] = useState("p");
  const [alignment, setAlignment] = useState("left");
  const [listStyle, setListStyle] = useState("normal");

  const cx = classNames.bind(styles);

  function changeContentType(type) {
    let result;
    let currentState = type === "alignment" ? alignment : paragraph;

    const stateArray = totalContentState[type];
    const index = stateArray.findIndex((i) => i === currentState);
    if (index === -1 || index === stateArray.length - 1) {
      result = stateArray[0];
    } else {
      result = stateArray[index + 1];
    }

    type === "alignment" ? setAlignment(result) : setParagraph(result);
  }

  return (
    <aside className={cx("tool-container")}>
      <button
        onClick={() => changeContentType("title")}
        button-title="標題"
        className={cx("tool-btn", "tool-btn--align-bottom")}
      >
        <FontAwesomeIcon
          icon={faT}
          size="lg"
          style={{ color: paragraph === "h2" && "red" }}
        />
        <FontAwesomeIcon
          icon={faT}
          size="xs"
          style={{ color: paragraph === "h3" && "red" }}
        />
      </button>
      <button
        onClick={() => changeContentType("quote")}
        button-title="引言"
        className={cx("tool-btn")}
      >
        <RiSingleQuotesL
          size="24px"
          style={{ color: paragraph === "quote1" && "red" }}
        />
        <RiSingleQuotesL
          size="24px"
          style={{ color: paragraph === "quote2" && "red" }}
        />
      </button>
      <button
        onClick={() => changeContentType("code")}
        button-title="程式碼"
        className={cx("tool-btn")}
      >
        <FontAwesomeIcon
          icon={faCode}
          size="lg"
          style={{ color: paragraph === "code" && "red" }}
        />
      </button>
      <hr />
      <button
        button-title="變更對齊"
        className={cx("tool-btn")}
        disabled={paragraph !== "p" || listStyle !== "normal"}
        onClick={() => changeContentType("alignment")}
      >
        <FontAwesomeIcon
          icon={faAlignCenter}
          size="xl"
          rotation={180}
          style={{
            color:
              (paragraph !== "p" || listStyle !== "normal") &&
              "rgb(242, 241, 240)"
          }}
        />
      </button>
      <button
        button-title="項目符號"
        className={cx("tool-btn")}
        onClick={() =>
          setListStyle((prevState) =>
            prevState === "bullet"
              ? "normal"
              : prevState === "number"
              ? "number"
              : "bullet"
          )
        }
      >
        <FontAwesomeIcon
          icon={faListUl}
          size="xl"
          style={{ color: listStyle === "bullet" && "red" }}
        />
      </button>
      <button
        button-title="數字項目符號"
        className={cx("tool-btn")}
        onClick={() =>
          setListStyle((prevState) =>
            prevState === "number"
              ? "normal"
              : prevState === "bullet"
              ? "bullet"
              : "number"
          )
        }
      >
        <FontAwesomeIcon
          icon={faListOl}
          size="xl"
          style={{ color: listStyle === "number" && "red" }}
        />
      </button>
      <hr />
      <button button-title="提及會員或文章" className={cx("tool-btn")}>
        <FontAwesomeIcon icon={faAt} size="xl" />
      </button>
      <hr />
      <button button-title="關燈" className={cx("tool-btn")}>
        <BsFillSunFill size="24px" />
      </button>
    </aside>
  );
}
