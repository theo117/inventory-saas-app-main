"use client";

import { useEffect, useMemo, useState } from "react";
import { addItem, deleteItem, updateItem } from "./actions";

type Item = {
  id: number;
  name: string;
  quantity: number;
};

const DEFAULT_REORDER_THRESHOLD = 5;
const THRESHOLDS_KEY = "inventory.reorderThresholds.v1";

export default function InventoryList({ items }: { items: Item[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLowOnly, setShowLowOnly] = useState(false);
  const [thresholds, setThresholds] = useState<Record<number, number>>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(THRESHOLDS_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Record<string, unknown>;
      const clean: Record<number, number> = {};
      for (const [key, value] of Object.entries(parsed)) {
        const id = Number(key);
        const threshold = Number(value);
        if (Number.isInteger(id) && Number.isFinite(threshold) && threshold >= 0) {
          clean[id] = threshold;
        }
      }
      setThresholds(clean);
    } catch {
      setThresholds({});
    }
  }, []);

  function getThreshold(itemId: number) {
    return thresholds[itemId] ?? DEFAULT_REORDER_THRESHOLD;
  }

  function setThreshold(itemId: number, value: number) {
    const safe = Number.isFinite(value) && value >= 0 ? value : 0;
    const next = { ...thresholds, [itemId]: safe };
    setThresholds(next);
    window.localStorage.setItem(THRESHOLDS_KEY, JSON.stringify(next));
  }

  const filteredItems = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return items.filter((item) => {
      const matchesSearch = !q || item.name.toLowerCase().includes(q);
      const isLowStock = item.quantity <= getThreshold(item.id);
      return matchesSearch && (!showLowOnly || isLowStock);
    });
  }, [items, searchTerm, showLowOnly, thresholds]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items"
          className="min-w-56 flex-1 rounded-md border px-3 py-2"
        />

        <label className="inline-flex items-center gap-2 text-sm text-zinc-700">
          <input
            type="checkbox"
            checked={showLowOnly}
            onChange={(e) => setShowLowOnly(e.target.checked)}
          />
          Show low stock only
        </label>

      </div>

      {/* Add Item */}
      <form action={addItem} className="flex gap-4">
        <input
          name="name"
          className="flex-1 rounded-md border px-3 py-2"
          placeholder="Item name"
          required
        />

        <input
          name="quantity"
          type="number"
          min={1}
          defaultValue={1}
          className="w-24 rounded-md border px-3 py-2"
        />

        <button className="rounded-md bg-black px-4 py-2 text-white">
          Add
        </button>
      </form>

      {/* Inventory List */}
      <ul className="divide-y">
        {filteredItems.map((item) => {
          const threshold = getThreshold(item.id);
          const isLowStock = item.quantity <= threshold;
          return (
          <li key={item.id} className="py-3 flex justify-between items-center">
            <div>
              <p className="font-medium">
                {item.name}{" "}
                {isLowStock && (
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                    Low stock
                  </span>
                )}
              </p>
              <p className="text-sm text-zinc-500">
                Quantity: {item.quantity}
              </p>
              <label className="mt-1 block text-sm text-zinc-600">
                Reorder at:
                <input
                  type="number"
                  min={0}
                  value={threshold}
                  onChange={(e) => setThreshold(item.id, Number(e.target.value))}
                  className="ml-2 w-20 rounded border px-2 py-0.5"
                />
              </label>
            </div>

            <div className="flex gap-4">
              {/* Edit */}
              <form action={updateItem}>
  <input type="hidden" name="id" value={item.id} />
  <input name="name" defaultValue={item.name} />
  <input name="quantity" defaultValue={item.quantity} />
  <button>Save</button>
</form>


              {/* Delete */}
              <form action={deleteItem}>
  <input type="hidden" name="id" value={item.id} />
  <button className="text-sm text-red-600 hover:underline">
    Delete
  </button>
</form>

            </div>
          </li>
        )})}
      </ul>

      {!filteredItems.length && (
        <p className="text-sm text-zinc-500">No items match the current filters.</p>
      )}
    </div>
  );
}
