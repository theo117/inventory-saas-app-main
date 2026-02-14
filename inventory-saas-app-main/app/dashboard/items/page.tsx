import { getItems, importItems } from "./actions";
import InventoryList from "./InventoryList";
import ExportCsvButton from "./ExportCsvButton";

export default async function DashboardItemsPage() {
  const items = (await getItems()) ?? [];
  const totalSkus = items.length;
  const totalUnits = items.reduce((sum: number, item: any) => sum + Number(item.quantity ?? 0), 0);
  const lowStockCount = items.filter((item: any) => Number(item.quantity ?? 0) <= 5).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Inventory</h1>
        <div className="flex flex-wrap items-center gap-3">
          <ExportCsvButton items={items} />
          <form action={importItems} className="flex flex-wrap items-center gap-2">
            <input
              type="file"
              name="csvFile"
              accept=".csv,text/csv"
              required
              className="max-w-[220px] text-sm"
            />
            <button className="rounded-md bg-zinc-800 px-4 py-2 text-white">
              Import CSV
            </button>
          </form>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-zinc-500">SKUs</p>
          <p className="text-2xl font-semibold">{totalSkus}</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-zinc-500">Total Units</p>
          <p className="text-2xl font-semibold">{totalUnits}</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-zinc-500">Low Stock (&le;5)</p>
          <p className="text-2xl font-semibold">{lowStockCount}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <InventoryList items={items} />
      </div>
    </div>
  );
}

