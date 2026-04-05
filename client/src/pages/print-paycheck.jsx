import { useParams } from "react-router-dom";

export default function PrintPaycheck() {
  const { id } = useParams();

  return <div>Print Paycheck {id}</div>;
}
