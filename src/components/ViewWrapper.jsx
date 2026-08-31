export default function ViewWrapper({ children }) {
  return (
    <div className="view-transition">
      {children}
    </div>
  );
}
