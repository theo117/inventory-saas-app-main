import { getItems } from "./actions";
import InventoryList from "./InventoryList";

export default async function DashboardItemsPage() {
  const items = (await getItems()) ?? [];
  const totalSkus = items.length;
  const totalUnits = items.reduce((sum, item) => sum + Number(item.quantity ?? 0), 0);
  const lowStockCount = items.filter((item) => Number(item.quantity ?? 0) <= 5).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Inventory</h1>
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
          <p className="text-sm text-zinc-500">Low Stock (<=5)</p>
          <p className="text-2xl font-semibold">{lowStockCount}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <InventoryList items={items} />
      </div>
    </div>
  );
}

