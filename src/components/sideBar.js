import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faLessThan, faAlignRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "../styles/sideBar.module.scss";

export default function FixedSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const cx = classNames.bind(styles);

  return (
    <aside
      className={cx("sidebar-container", { "sidebar-container--show": isOpen })}
    >
      <div
        className={cx("sidebar-title-container", {
          "sidebar-title-container--show": isOpen
        })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <>
            <div className={cx("sidebar-title-container__icon")}>
              <FontAwesomeIcon icon={faLessThan} size="xs" />
            </div>
            <span className={cx("sidebar-title")}>收合目錄</span>
          </>
        ) : (
          <>
            <div className={cx("sidebar-title-container__icon")}>
              <FontAwesomeIcon icon={faAlignRight} rotation={180} size="xs" />
            </div>
            <span className={cx("sidebar-title")}>目錄</span>
          </>
        )}
      </div>
      <ol
        className={cx("sidebar-content-list", {
          "sidebar-content-list--show": isOpen
        })}
      >
        <li className={cx("heading2")}>
          LongTextLongTextLongTextLongTextLongTextLongText
        </li>
        <li className={cx("heading3")}>
          lllllooolllllooolllllooolllllooolllllooolllllooolllllooo
        </li>
        <li className={cx("heading3")}>lllllooo</li>
        <li className={cx("heading3")}>lllllooo</li>
        <li className={cx("heading2")}>wwww</li>
        <li className={cx("heading3")}>oooo</li>
        <li className={cx("heading3")}>oohjghjoo</li>
        <li className={cx("heading3")}>oooo</li>
        <li className={cx("heading2")}>
          LongTextLongTextLongTextLongTextLongTextLongText
        </li>
        <li className={cx("heading3")}>lllllooo</li>
        <li className={cx("heading3")}>lllllooo</li>
        <li className={cx("heading3")}>lllllooo</li>
        <li className={cx("heading2")}>wwww</li>
        <li className={cx("heading3")}>oooo</li>
        <li className={cx("heading3")}>oohjghjoo</li>
        <li className={cx("heading3")}>oooo</li>
      </ol>
    </aside>
  );
}
