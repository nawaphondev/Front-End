function App() {
  return (
    <div data-theme="" className="min-h-screen">
      <h1 className="text-4xl text-blue-600 text-center border bg-yellow-200 py-5 m-6 relative top-5 font-bold">
        Hello world!
      </h1>
      <input type="checkbox" value="retro" className="toggle theme-controller"/>
      <div className="flex gap-3 border justify-center py-3">
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
    </div>
  );
}

export default App;
