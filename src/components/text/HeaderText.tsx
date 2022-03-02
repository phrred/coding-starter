import FontClass from "types/enums/FontClass";
import styles from "css/text/HeaderText.module.css";
import joinClasses from "utils/joinClasses";

export type Props = {
  children:
    | string
    | JSX.Element
    | Array<JSX.Element | string | number>
    | number;
  className?: string;
  fontClass: FontClass;
  textAlign?: "center" | "left" | "right";
  textTransform?: "none" | "uppercase";
};

export default function HeaderText({
  children,
  className,
  fontClass,
  textAlign,
  textTransform,
}: Props): JSX.Element {
  const classNameJoined = joinClasses(fontClass, styles.header, className);

  const style = {
    ...(textAlign != null ? { textAlign } : {}),
    ...(textTransform != null ? { textTransform } : {}),
  };

  switch (fontClass) {
    case FontClass.Header1:
      return (
        <h1 className={classNameJoined} style={style}>
          {children}
        </h1>
      );
    case FontClass.Header2:
      return (
        <h2 className={classNameJoined} style={style}>
          {children}
        </h2>
      );
    default:
      throw new Error(`Unexpected fontClass of ${fontClass}`);
  }
}
