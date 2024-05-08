function HorizontalLine({ borderBottom = true, fullLine = false }) {
  return <>{borderBottom && <hr className={`${fullLine ? "" : "mx-3"}`} />}</>;
}

export default HorizontalLine;
