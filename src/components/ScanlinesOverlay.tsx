export default function ScanlinesOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,245,255,0.02)_2px,rgba(0,245,255,0.02)_4px)]" />
    </div>
  );
}
