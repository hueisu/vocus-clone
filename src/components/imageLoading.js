import classNames from "classnames/bind";
import styles from "../styles/editor.module.scss";
import Loading from "./common/loading";

export default function ImageLoading() {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx("border-container", "loading-container")}>
        <Loading color="d3d3d3" size="100px" />
        <span>圖片上傳中，請耐心等待</span>
        <br />
        <button className={cx("loading-container__cancel-button")}>
          取消上傳
        </button>
      </div>
      <input
        className={cx("input-info", "text-center")}
        placeholder="請輸入圖片文字敘述"
      />
    </>
  );
}
