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
"[project]/app/dashboard/users/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400e770815a0db3169cf74707fd7525c7ab59fdff0":"demoteUser","407cf11958b164250ca933e461d15b7052fa267197":"promoteUser","40cdfe61fc21370a74c4da81d07591a7bc14eb1043":"updateUserRole"},"",""] */ __turbopack_context__.s([
    "demoteUser",
    ()=>demoteUser,
    "promoteUser",
    ()=>promoteUser,
    "updateUserRole",
    ()=>updateUserRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/get-profile.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const ALLOWED_ROLES = new Set([
    "admin",
    "staff"
]);
function createSupabaseAdminClient() {
    const url = ("TURBOPACK compile-time value", "https://vahgbneahqmveqasrkbs.supabase.co");
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceRoleKey) {
        throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, serviceRoleKey);
}
async function updateUserRole(formData) {
    const supabase = createSupabaseAdminClient();
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfile"])();
    if (!me || me.role !== "admin") throw new Error("Not allowed");
    const userId = String(formData.get("userId") ?? "");
    const role = String(formData.get("role") ?? "");
    if (!userId || !ALLOWED_ROLES.has(role)) {
        throw new Error("Invalid role update");
    }
    if (userId === me.id && role !== "admin") {
        throw new Error("Cannot demote your own admin account");
    }
    const { data: targetUser, error: targetError } = await supabase.from("profiles").select("id, role").eq("id", userId).maybeSingle();
    if (targetError) {
        throw new Error(`Unable to read target user: ${targetError.message}`);
    }
    if (!targetUser) {
        throw new Error("Target user not found or not visible by policy");
    }
    const { data: updatedRow, error: updateError } = await supabase.from("profiles").update({
        role
    }).eq("id", userId).select("id").maybeSingle();
    if (updateError) {
        throw new Error(`Role update failed: ${updateError.message}`);
    }
    if (!updatedRow) {
        throw new Error("Role update affected 0 rows. Check profiles UPDATE policy (RLS).");
    }
    const { error: auditError } = await supabase.from("audit_logs").insert({
        actor_id: me.id,
        action: "UPDATED_USER_ROLE",
        target: `${userId}:${role}`
    });
    if (auditError) {
        throw new Error(`Audit log failed: ${auditError.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard/users");
}
async function promoteUser(userId) {
    const supabase = createSupabaseAdminClient();
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfile"])();
    if (!me || me.role !== "admin") throw new Error("Not allowed");
    if (userId === me.id) throw new Error("Cannot change your own role");
    const { error: updateError } = await supabase.from("profiles").update({
        role: "admin"
    }).eq("id", userId);
    if (updateError) {
        throw new Error(`Promote failed: ${updateError.message}`);
    }
    const { error: auditError } = await supabase.from("audit_logs").insert({
        actor_id: me.id,
        action: "PROMOTED_USER",
        target: userId
    });
    if (auditError) {
        throw new Error(`Audit log failed: ${auditError.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard/users");
}
async function demoteUser(userId) {
    const supabase = createSupabaseAdminClient();
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$get$2d$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfile"])();
    if (!me || me.role !== "admin") throw new Error("Not allowed");
    if (userId === me.id) throw new Error("Cannot change your own role");
    const { error: updateError } = await supabase.from("profiles").update({
        role: "staff"
    }).eq("id", userId);
    if (updateError) {
        throw new Error(`Demote failed: ${updateError.message}`);
    }
    const { error: auditError } = await supabase.from("audit_logs").insert({
        actor_id: me.id,
        action: "DEMOTED_USER",
        target: userId
    });
    if (auditError) {
        throw new Error(`Audit log failed: ${auditError.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard/users");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateUserRole,
    promoteUser,
    demoteUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserRole, "40cdfe61fc21370a74c4da81d07591a7bc14eb1043", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(promoteUser, "407cf11958b164250ca933e461d15b7052fa267197", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(demoteUser, "400e770815a0db3169cf74707fd7525c7ab59fdff0", null);
}),
"[project]/.next-internal/server/app/dashboard/users/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/dashboard/users/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/dashboard/users/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/dashboard/users/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "005b4deac13a0b8c16d5cf280aa14e7f3d3fe01960",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "400e770815a0db3169cf74707fd7525c7ab59fdff0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["demoteUser"],
    "407cf11958b164250ca933e461d15b7052fa267197",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["promoteUser"],
    "40cdfe61fc21370a74c4da81d07591a7bc14eb1043",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserRole"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$users$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2f$users$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/users/page/actions.js { ACTIONS_MODULE0 => "[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/dashboard/users/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_7343db94._.js.map