(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dashboard/users/data:2d112d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "promoteUser",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"407cf11958b164250ca933e461d15b7052fa267197":"promoteUser"},"app/dashboard/users/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("407cf11958b164250ca933e461d15b7052fa267197", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "promoteUser");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBjcmVhdGVTdXBhYmFzZVNlcnZlckNsaWVudCB9IGZyb20gXCJAL2FwcC9saWIvc3VwYWJhc2Utc2VydmVyXCJcbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tIFwiQC9hcHAvbGliL2dldC1wcm9maWxlXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb21vdGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlU3VwYWJhc2VTZXJ2ZXJDbGllbnQoKVxuICBjb25zdCBtZSA9IGF3YWl0IGdldFByb2ZpbGUoKVxuICBpZiAoIW1lIHx8IG1lLnJvbGUgIT09IFwiYWRtaW5cIikgdGhyb3cgbmV3IEVycm9yKFwiTm90IGFsbG93ZWRcIilcbiAgaWYgKHVzZXJJZCA9PT0gbWUuaWQpIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjaGFuZ2UgeW91ciBvd24gcm9sZVwiKVxuXG4gIGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwcm9maWxlc1wiKS51cGRhdGUoeyByb2xlOiBcImFkbWluXCIgfSkuZXEoXCJpZFwiLCB1c2VySWQpXG5cbiAgYXdhaXQgc3VwYWJhc2UuZnJvbShcImF1ZGl0X2xvZ3NcIikuaW5zZXJ0KHtcbiAgICBhY3Rvcl9pZDogbWUuaWQsXG4gICAgYWN0aW9uOiBcIlBST01PVEVEX1VTRVJcIixcbiAgICB0YXJnZXQ6IHVzZXJJZCxcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbW90ZVVzZXIodXNlcklkOiBzdHJpbmcpIHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVTdXBhYmFzZVNlcnZlckNsaWVudCgpXG4gIGNvbnN0IG1lID0gYXdhaXQgZ2V0UHJvZmlsZSgpXG4gIGlmICghbWUgfHwgbWUucm9sZSAhPT0gXCJhZG1pblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYWxsb3dlZFwiKVxuICBpZiAodXNlcklkID09PSBtZS5pZCkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNoYW5nZSB5b3VyIG93biByb2xlXCIpXG5cbiAgYXdhaXQgc3VwYWJhc2UuZnJvbShcInByb2ZpbGVzXCIpLnVwZGF0ZSh7IHJvbGU6IFwic3RhZmZcIiB9KS5lcShcImlkXCIsIHVzZXJJZClcblxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiYXVkaXRfbG9nc1wiKS5pbnNlcnQoe1xuICAgIGFjdG9yX2lkOiBtZS5pZCxcbiAgICBhY3Rpb246IFwiREVNT1RFRF9VU0VSXCIsXG4gICAgdGFyZ2V0OiB1c2VySWQsXG4gIH0pXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQUtzQix3TEFBQSJ9
}),
"[project]/app/dashboard/users/promote-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PromoteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$data$3a$2d112d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/dashboard/users/data:2d112d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PromoteButton({ userId }) {
    _s();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>startTransition(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$data$3a$2d112d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["promoteUser"])(userId)),
        disabled: isPending,
        className: "bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500",
        children: isPending ? "Promoting..." : "Promote"
    }, void 0, false, {
        fileName: "[project]/app/dashboard/users/promote-button.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(PromoteButton, "F6rOvlKxJWx0auMIl1x3Vgc91fQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = PromoteButton;
var _c;
__turbopack_context__.k.register(_c, "PromoteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/users/data:5cbd05 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "demoteUser",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"400e770815a0db3169cf74707fd7525c7ab59fdff0":"demoteUser"},"app/dashboard/users/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400e770815a0db3169cf74707fd7525c7ab59fdff0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "demoteUser");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBjcmVhdGVTdXBhYmFzZVNlcnZlckNsaWVudCB9IGZyb20gXCJAL2FwcC9saWIvc3VwYWJhc2Utc2VydmVyXCJcbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tIFwiQC9hcHAvbGliL2dldC1wcm9maWxlXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb21vdGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlU3VwYWJhc2VTZXJ2ZXJDbGllbnQoKVxuICBjb25zdCBtZSA9IGF3YWl0IGdldFByb2ZpbGUoKVxuICBpZiAoIW1lIHx8IG1lLnJvbGUgIT09IFwiYWRtaW5cIikgdGhyb3cgbmV3IEVycm9yKFwiTm90IGFsbG93ZWRcIilcbiAgaWYgKHVzZXJJZCA9PT0gbWUuaWQpIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjaGFuZ2UgeW91ciBvd24gcm9sZVwiKVxuXG4gIGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwcm9maWxlc1wiKS51cGRhdGUoeyByb2xlOiBcImFkbWluXCIgfSkuZXEoXCJpZFwiLCB1c2VySWQpXG5cbiAgYXdhaXQgc3VwYWJhc2UuZnJvbShcImF1ZGl0X2xvZ3NcIikuaW5zZXJ0KHtcbiAgICBhY3Rvcl9pZDogbWUuaWQsXG4gICAgYWN0aW9uOiBcIlBST01PVEVEX1VTRVJcIixcbiAgICB0YXJnZXQ6IHVzZXJJZCxcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbW90ZVVzZXIodXNlcklkOiBzdHJpbmcpIHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVTdXBhYmFzZVNlcnZlckNsaWVudCgpXG4gIGNvbnN0IG1lID0gYXdhaXQgZ2V0UHJvZmlsZSgpXG4gIGlmICghbWUgfHwgbWUucm9sZSAhPT0gXCJhZG1pblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYWxsb3dlZFwiKVxuICBpZiAodXNlcklkID09PSBtZS5pZCkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNoYW5nZSB5b3VyIG93biByb2xlXCIpXG5cbiAgYXdhaXQgc3VwYWJhc2UuZnJvbShcInByb2ZpbGVzXCIpLnVwZGF0ZSh7IHJvbGU6IFwic3RhZmZcIiB9KS5lcShcImlkXCIsIHVzZXJJZClcblxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiYXVkaXRfbG9nc1wiKS5pbnNlcnQoe1xuICAgIGFjdG9yX2lkOiBtZS5pZCxcbiAgICBhY3Rpb246IFwiREVNT1RFRF9VU0VSXCIsXG4gICAgdGFyZ2V0OiB1c2VySWQsXG4gIH0pXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZSQW9Cc0IsdUxBQUEifQ==
}),
"[project]/app/dashboard/users/demote-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$data$3a$5cbd05__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/dashboard/users/data:5cbd05 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DemoteButton({ userId }) {
    _s();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>startTransition(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$data$3a$5cbd05__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["demoteUser"])(userId)),
        disabled: isPending,
        className: "bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500",
        children: isPending ? "Demoting..." : "Demote"
    }, void 0, false, {
        fileName: "[project]/app/dashboard/users/demote-button.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(DemoteButton, "F6rOvlKxJWx0auMIl1x3Vgc91fQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = DemoteButton;
var _c;
__turbopack_context__.k.register(_c, "DemoteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_dashboard_users_617b91a4._.js.map