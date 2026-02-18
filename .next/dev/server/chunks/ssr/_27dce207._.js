module.exports = [
"[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"005b4deac13a0b8c16d5cf280aa14e7f3d3fe01960":"logout"},"",""] */ __turbopack_context__.s([
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function logout() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    await supabase.auth.signOut();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    logout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "005b4deac13a0b8c16d5cf280aa14e7f3d3fe01960", null);
}),
"[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b0153a19d84ab0d0827df2d29fa2d23ff4147cbc":"getItems","406705747a9545b11aea9eb3e6ef6eadc9bf32f0d2":"updateItem","40766a76e1dfa9a94640275504df6a5465a82945f6":"deleteItem","407a9792dd6171413cfdcdf8bb1e041d390d087657":"importItems","40cf5f7e8d2f6ce930ffc7a69b9f19fe0b8de22c97":"addItem"},"",""] */ __turbopack_context__.s([
    "addItem",
    ()=>addItem,
    "deleteItem",
    ()=>deleteItem,
    "getItems",
    ()=>getItems,
    "importItems",
    ()=>importItems,
    "updateItem",
    ()=>updateItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/get-profile.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getItems() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfile"])();
    if (!me) throw new Error("Not authenticated");
    const { data } = await supabase.from("items").select("*").eq("user_id", me.id).order("created_at", {
        ascending: false
    });
    return data;
}
async function addItem(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfile"])();
    if (!me) throw new Error("Not authenticated");
    const name = formData.get("name");
    const quantity = Number(formData.get("quantity"));
    await supabase.from("items").insert({
        user_id: me.id,
        name,
        quantity
    });
}
function parseCsvRows(text) {
    const rows = [];
    let row = [];
    let cell = "";
    let inQuotes = false;
    for(let i = 0; i < text.length; i += 1){
        const char = text[i];
        const next = text[i + 1];
        if (char === '"') {
            if (inQuotes && next === '"') {
                cell += '"';
                i += 1;
            } else {
                inQuotes = !inQuotes;
            }
            continue;
        }
        if (char === "," && !inQuotes) {
            row.push(cell);
            cell = "";
            continue;
        }
        if ((char === "\n" || char === "\r") && !inQuotes) {
            if (char === "\r" && next === "\n") i += 1;
            row.push(cell);
            rows.push(row);
            row = [];
            cell = "";
            continue;
        }
        cell += char;
    }
    if (cell.length > 0 || row.length > 0) {
        row.push(cell);
        rows.push(row);
    }
    return rows;
}
async function importItems(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfile"])();
    if (!me) throw new Error("Not authenticated");
    const file = formData.get("csvFile");
    if (!file || typeof file !== "object" || !("text" in file) || !("size" in file) || typeof file.text !== "function" || typeof file.size !== "number" || file.size === 0) {
        throw new Error("CSV file is required");
    }
    const csvFile = file;
    const text = await csvFile.text();
    const rows = parseCsvRows(text).filter((row)=>row.some((cell)=>cell.trim() !== ""));
    if (rows.length < 2) throw new Error("CSV must include a header and at least one row");
    const header = rows[0].map((h)=>h.trim().toLowerCase());
    const nameIndex = header.indexOf("name");
    const quantityIndex = header.indexOf("quantity");
    if (nameIndex === -1 || quantityIndex === -1) {
        throw new Error("CSV must contain name and quantity columns");
    }
    const inserts = rows.slice(1).map((row)=>{
        const name = (row[nameIndex] ?? "").trim();
        const quantity = Number(row[quantityIndex] ?? "");
        if (!name || !Number.isFinite(quantity) || quantity < 0) return null;
        return {
            user_id: me.id,
            name,
            quantity
        };
    }).filter((entry)=>entry !== null);
    if (!inserts.length) {
        throw new Error("No valid rows found in CSV");
    }
    await supabase.from("items").insert(inserts);
    await supabase.from("audit_logs").insert({
        actor_id: me.id,
        action: "IMPORTED_ITEMS",
        target: `${inserts.length} rows`
    });
}
async function deleteItem(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfile"])();
    if (!me || me.role !== "admin") {
        throw new Error("Not allowed");
    }
    const id = Number(formData.get("id"));
    const { data: item } = await supabase.from("items").select("name").eq("id", id).single();
    await supabase.from("items").delete().eq("id", id);
    await supabase.from("audit_logs").insert({
        actor_id: me.id,
        action: "DELETED_ITEM",
        target: item?.name ?? `Item ${id}`
    });
}
async function updateItem(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfile"])();
    if (!me) throw new Error("Not authenticated");
    const id = Number(formData.get("id"));
    const name = formData.get("name");
    const quantity = Number(formData.get("quantity"));
    await supabase.from("items").update({
        name,
        quantity
    }).eq("id", id);
    await supabase.from("audit_logs").insert({
        actor_id: me.id,
        action: "UPDATED_ITEM",
        target: `Item ${id}`
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getItems,
    addItem,
    importItems,
    deleteItem,
    updateItem
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getItems, "00b0153a19d84ab0d0827df2d29fa2d23ff4147cbc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addItem, "40cf5f7e8d2f6ce930ffc7a69b9f19fe0b8de22c97", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importItems, "407a9792dd6171413cfdcdf8bb1e041d390d087657", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteItem, "40766a76e1dfa9a94640275504df6a5465a82945f6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateItem, "406705747a9545b11aea9eb3e6ef6eadc9bf32f0d2", null);
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "005b4deac13a0b8c16d5cf280aa14e7f3d3fe01960",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "00b0153a19d84ab0d0827df2d29fa2d23ff4147cbc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getItems"],
    "406705747a9545b11aea9eb3e6ef6eadc9bf32f0d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateItem"],
    "40766a76e1dfa9a94640275504df6a5465a82945f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteItem"],
    "407a9792dd6171413cfdcdf8bb1e041d390d087657",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importItems"],
    "40cf5f7e8d2f6ce930ffc7a69b9f19fe0b8de22c97",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addItem"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$items$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/items/actions.tsx [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_27dce207._.js.map