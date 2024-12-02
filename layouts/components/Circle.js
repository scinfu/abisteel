function Circle({ className, width, height, fill = true, ...props }) {
  return (
    <div
      className={`absolute ${className} ${
        fill ? "bg-primary" : "bg-border"
      } rounded-full`}
      style={{ width: `${width}px`, height: `${height}px` }}
      {...props}
    ></div>
  );
}

export default Circle;
