export default function PropsChildren({
  isChildName,
  isParentName,
  ischangeChildName,
  isChangeParentName,
}) {
  return (
    <div>
      <h1>Child Component</h1>
      <h2>Child name: {isChildName}</h2>
      <h2>Parent name: {isParentName}</h2>
      <button className="btn btn-primary mx-2" onClick={ischangeChildName}>
        Change Child
      </button>

      <button
        className="btn btn-success"
        onClick={() => isChangeParentName("Changes Parent")}
      >
        Change Parent
      </button>
    </div>
  );
}
