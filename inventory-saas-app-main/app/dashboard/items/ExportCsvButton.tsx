"use client";

type Item = {
  id: number;
  name: string;
  quantity: number;
};

function csvCell(value: string | number) {
  const safe = String(value ?? "").replace(/"/g, "\"\"");
  return `"${safe}"`;
}

export default function ExportCsvButton({ items }: { items: Item[] }) {
  function handleExport() {
    if (!items.length) return;

    const header = ["id", "name", "quantity"];
    const rows = items.map((item) => [item.id, item.name, item.quantity]);
    const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const date = new Date().toISOString().slice(0, 10);
    const link = document.createElement("a");
    link.href = url;
    link.download = `inventory-${date}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={!items.length}
      className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      Export CSV
    </button>
  );
}
