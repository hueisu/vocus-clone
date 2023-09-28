import classNames from "classnames/bind";
import styles from "../styles/editor.module.scss";
import MediaTool from "./mediaTool";
import ImageLoading from "./imageLoading";

export default function Editor() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("editor-content")}>
      <textarea
        defaultValue="TitleTitleTitleTitleTitleTitleTitleTitleTitleTitle"
        className={cx("editor-content__title")}
        placeholder="請輸入標題"
        maxLength="60"
      ></textarea>
      <article>
        <h2 contentEditable="true">Testing text</h2>
        <p contentEditable="true"></p>
        <p contentEditable="true"></p>
        <ImageLoading />
        <p contentEditable="true"></p>
        <p contentEditable="true"></p>
        <MediaTool />
      </article>
    </div>
  );
}
