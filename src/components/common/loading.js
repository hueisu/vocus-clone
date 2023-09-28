import { VscLoading } from "react-icons/vsc";

export default function Loading(props) {
  const { color, size } = props;

  return (
    <div className="loading">
      <VscLoading color={color} size={size} />
    </div>
  );
}
