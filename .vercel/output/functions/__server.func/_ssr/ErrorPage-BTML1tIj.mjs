import "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var ErrorPage = ({ error }) => {
	if (!error) return null;
	const { message = "An unexpected error occurred.", errorSources = [], err = {}, stack = "" } = typeof error === "object" && "data" in error && error.data ? error.data : error;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: styles.container,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: styles.header,
				children: [typeof err?.statusCode === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: styles.badge,
					children: err.statusCode
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: styles.title,
					children: message
				})]
			}),
			errorSources.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: styles.section,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					style: styles.sectionTitle,
					children: "Error Details"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					style: styles.list,
					children: errorSources.map((source, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						style: styles.listItem,
						children: [source.path !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [source.path, ": "] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: source.message })]
					}, index))
				})]
			}),
			stack && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: styles.section,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					style: styles.sectionTitle,
					children: "Stack Trace"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					style: styles.stack,
					children: stack
				})]
			})
		]
	});
};
var styles = {
	container: {
		maxWidth: "700px",
		margin: "20px auto",
		padding: "24px",
		borderRadius: "8px",
		backgroundColor: "#fff5f5",
		border: "1px solid #feb2b2",
		color: "#2d3748",
		fontFamily: "system-ui, -apple-system, sans-serif",
		boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
	},
	header: {
		display: "flex",
		alignItems: "center",
		gap: "12px",
		borderBottom: "1px solid #fed7d7",
		paddingBottom: "12px",
		marginBottom: "16px"
	},
	badge: {
		backgroundColor: "#e53e3e",
		color: "#ffffff",
		padding: "4px 10px",
		borderRadius: "4px",
		fontSize: "14px",
		fontWeight: "bold"
	},
	title: {
		margin: 0,
		fontSize: "18px",
		color: "#c53030"
	},
	section: { marginTop: "16px" },
	sectionTitle: {
		margin: "0 0 8px 0",
		fontSize: "14px",
		textTransform: "uppercase",
		letterSpacing: "0.05em",
		color: "#742a2a"
	},
	list: {
		margin: 0,
		paddingLeft: "20px",
		color: "#9b2c2c"
	},
	listItem: {
		marginBottom: "4px",
		fontSize: "14px"
	},
	stack: {
		backgroundColor: "#2d3748",
		color: "#f7fafc",
		padding: "14px",
		borderRadius: "6px",
		fontSize: "12px",
		overflowX: "auto",
		whiteSpace: "pre-wrap",
		wordBreak: "break-word",
		fontFamily: "Courier New, Courier, monospace"
	}
};
//#endregion
export { ErrorPage as t };
