export default function SettingsPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Dummy Settings</h2>
      <p className="text-zinc-700">Input controls for interaction checks.</p>
      <div className="grid max-w-lg gap-4 rounded-lg border border-zinc-200 bg-white p-5">
        <label className="grid gap-2 text-sm">
          <span>Environment Name</span>
          <input
            className="rounded-md border border-zinc-300 px-3 py-2"
            defaultValue="test-sandbox"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span>Region</span>
          <select className="rounded-md border border-zinc-300 px-3 py-2">
            <option>ap-northeast-2</option>
            <option>us-west-1</option>
          </select>
        </label>
      </div>
    </section>
  );
}
