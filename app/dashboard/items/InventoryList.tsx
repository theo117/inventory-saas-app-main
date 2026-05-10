"use client";

import { useMemo, useState } from "react";
import { addItem, deleteItem, updateItem } from "./actions";

type Item = {
  id: number;
  name: string;
  quantity: number;
};

const DEFAULT_REORDER_THRESHOLD = 5;
const THRESHOLDS_KEY = "inventory.reorderThresholds.v1";

function loadThresholds(): Record<number, number> {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(THRESHOLDS_KEY);
    if (!raw) return {};

    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const clean: Record<number, number> = {};

    for (const [key, value] of Object.entries(parsed)) {
      const id = Number(key);
      const threshold = Number(value);
      if (Number.isInteger(id) && Number.isFinite(threshold) && threshold >= 0) {
        clean[id] = threshold;
      }
    }

    return clean;
  } catch {
    return {};
  }
}

function quantityBadgeClass(isLowStock: boolean) {
  return isLowStock
    ? "bg-red-50 text-red-700 ring-red-200"
    : "bg-emerald-50 text-emerald-700 ring-emerald-200";
}

export default function InventoryList({ items }: { items: Item[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLowOnly, setShowLowOnly] = useState(false);
  const [thresholds, setThresholds] = useState<Record<number, number>>(loadThresholds);

  function setThreshold(itemId: number, value: number) {
    const safe = Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
    const next = { ...thresholds, [itemId]: safe };
    setThresholds(next);
    window.localStorage.setItem(THRESHOLDS_KEY, JSON.stringify(next));
  }

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return items.filter((item) => {
      const threshold = thresholds[item.id] ?? DEFAULT_REORDER_THRESHOLD;
      const matchesSearch = !query || item.name.toLowerCase().includes(query);
      const isLowStock = item.quantity <= threshold;

      return matchesSearch && (!showLowOnly || isLowStock);
    });
  }, [items, searchTerm, showLowOnly, thresholds]);

  const hasFilters = Boolean(searchTerm.trim()) || showLowOnly;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search items"
            className="min-h-10 w-full rounded-md border border-zinc-300 px-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 sm:max-w-sm"
          />

          <label className="inline-flex min-h-10 items-center gap-2 rounded-md border border-zinc-200 px-3 text-sm text-zinc-700">
            <input
              type="checkbox"
              checked={showLowOnly}
              onChange={(e) => setShowLowOnly(e.target.checked)}
              className="h-4 w-4 accent-zinc-900"
            />
            Low stock only
          </label>
        </div>

        <p className="text-sm text-zinc-500">
          Showing {filteredItems.length} of {items.length}
        </p>
      </div>

      <form action={addItem} className="grid gap-3 rounded-md border border-zinc-200 bg-zinc-50 p-3 sm:grid-cols-[1fr_8rem_auto]">
        <input
          name="name"
          className="min-h-10 rounded-md border border-zinc-300 px-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
          placeholder="Item name"
          required
        />

        <input
          name="quantity"
          type="number"
          min={0}
          step={1}
          defaultValue={1}
          className="min-h-10 rounded-md border border-zinc-300 px-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
        />

        <button className="min-h-10 rounded-md bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-700">
          Add item
        </button>
      </form>

      <div className="overflow-hidden rounded-md border border-zinc-200">
        <div className="hidden grid-cols-[minmax(10rem,1fr)_7rem_9rem_minmax(18rem,1.5fr)] gap-4 bg-zinc-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500 md:grid">
          <span>Name</span>
          <span>Quantity</span>
          <span>Reorder</span>
          <span className="text-right">Actions</span>
        </div>

        <ul className="divide-y divide-zinc-200">
          {filteredItems.map((item) => {
            const threshold = thresholds[item.id] ?? DEFAULT_REORDER_THRESHOLD;
            const isLowStock = item.quantity <= threshold;

            return (
              <li key={item.id} className="grid gap-4 px-4 py-4 md:grid-cols-[minmax(10rem,1fr)_7rem_9rem_minmax(18rem,1.5fr)] md:items-center">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate font-medium text-zinc-950">{item.name}</p>
                    {isLowStock && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                        Low stock
                      </span>
                    )}
                  </div>
                </div>

                <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${quantityBadgeClass(isLowStock)}`}>
                  Qty {item.quantity}
                </span>

                <label className="flex items-center gap-2 text-sm text-zinc-600 md:block">
                  <span className="md:sr-only">Reorder at</span>
                  <input
                    type="number"
                    min={0}
                    step={1}
                    value={threshold}
                    onChange={(e) => setThreshold(item.id, Number(e.target.value))}
                    className="h-9 w-20 rounded-md border border-zinc-300 px-2 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                    aria-label={`Reorder threshold for ${item.name}`}
                  />
                </label>

                <div className="grid gap-2 sm:grid-cols-[1fr_6rem_4rem]">
                  <form action={updateItem} className="contents">
                    <input type="hidden" name="id" value={item.id} />
                    <input
                      name="name"
                      defaultValue={item.name}
                      className="h-9 rounded-md border border-zinc-300 px-2 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                      aria-label={`Name for ${item.name}`}
                      required
                    />
                    <input
                      name="quantity"
                      type="number"
                      min={0}
                      step={1}
                      defaultValue={item.quantity}
                      className="h-9 rounded-md border border-zinc-300 px-2 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                      aria-label={`Quantity for ${item.name}`}
                    />
                    <button className="h-9 rounded-md border border-zinc-300 px-3 text-sm font-medium transition hover:bg-zinc-50">
                      Save
                    </button>
                  </form>

                  <form action={deleteItem} className="sm:col-start-3">
                    <input type="hidden" name="id" value={item.id} />
                    <button
                      className="h-9 w-full rounded-md border border-red-200 px-3 text-sm font-medium text-red-700 transition hover:bg-red-50"
                      onClick={(event) => {
                        if (!window.confirm(`Delete ${item.name}?`)) {
                          event.preventDefault();
                        }
                      }}
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {!filteredItems.length && (
        <div className="rounded-md border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">
          {hasFilters ? "No items match the current filters." : "No inventory items yet."}
        </div>
      )}
    </div>
  );
}
