import classNames from "classnames/bind";
import styles from "../styles/editor.module.scss";
import {
  AiOutlinePlus,
  AiOutlinePicture,
  AiOutlineFileSearch,
  AiOutlineAlignCenter
} from "react-icons/ai";
import { BiCode } from "react-icons/bi";

export default function MediaTool() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("media-toolbar")}>
      <button className={cx("media-toolbar--button")}>
        <AiOutlinePlus size="28px" />
      </button>
      <div className={cx("media-toolbar--button-group")}>
        <div className={cx("media-toolbar--divider")} />
        <button button-title="上傳圖片" className={cx("media-toolbar--button")}>
          <AiOutlinePicture size="25px" />
        </button>
        <button button-title="圖庫" className={cx("media-toolbar--button")}>
          <AiOutlineFileSearch size="25px" />
        </button>
        <button button-title="嵌入網站" className={cx("media-toolbar--button")}>
          <BiCode size="28px" />
        </button>
        <button button-title="分隔線" className={cx("media-toolbar--button")}>
          <AiOutlineAlignCenter size="28px" />
        </button>
      </div>
    </div>
  );
}
