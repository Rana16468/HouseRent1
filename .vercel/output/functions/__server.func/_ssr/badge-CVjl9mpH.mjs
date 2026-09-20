import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { g as digitsPhone, h as cn, t as Button } from "./postApi-DBq9pe7E.mjs";
import { T as MessageCircle, a as Users, i as Video, m as Send, x as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-CVjl9mpH.js
var import_jsx_runtime = require_jsx_runtime();
function ContactActions({ contact, size = "default", className }) {
	const digits = digitsPhone(contact.phone || "");
	const wa = digits.startsWith("880") ? digits : digits.replace(/^0/, "880");
	const tel = digits.startsWith("880") ? `+${digits}` : contact.phone;
	const telegramHref = contact.telegramHandle ? `https://t.me/${contact.telegramHandle.replace(/^@/, "")}` : `https://t.me/+${wa}`;
	const actions = [
		{
			key: "call",
			label: "Call",
			href: `tel:${tel}`,
			icon: Phone,
			show: Boolean(contact.phone),
			external: false
		},
		{
			key: "whatsapp",
			label: "WhatsApp",
			href: `https://wa.me/${wa}`,
			icon: MessageCircle,
			show: Boolean(contact.whatsapp),
			external: true
		},
		{
			key: "telegram",
			label: "Telegram",
			href: telegramHref,
			icon: Send,
			show: Boolean(contact.telegram),
			external: true
		},
		{
			key: "imo",
			label: "IMO",
			href: `tel:${tel}`,
			icon: Video,
			show: Boolean(contact.imo),
			external: false
		},
		{
			key: "teams",
			label: "Teams",
			href: contact.teamsLink || "https://teams.microsoft.com/",
			icon: Users,
			show: Boolean(contact.teams),
			external: true
		}
	].filter((a) => a.show);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex flex-wrap gap-2 ${className ?? ""}`,
		children: actions.map((action) => {
			const Icon = action.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size,
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: action.href,
					target: action.external ? "_blank" : void 0,
					rel: action.external ? "noopener noreferrer" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: action.label })]
				})
			}, action.key);
		})
	});
}
function ChannelDots({ contact }) {
	const channels = [
		contact.whatsapp && "WhatsApp",
		contact.telegram && "Telegram",
		contact.imo && "IMO",
		contact.teams && "Teams"
	].filter(Boolean);
	if (channels.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs text-muted-foreground",
		children: "Call only"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap items-center gap-1",
		children: channels.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium tracking-wide text-secondary-foreground uppercase",
			children: name
		}, name))
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground",
		outline: "border-border bg-surface text-fg",
		muted: "border-transparent bg-secondary text-secondary-foreground",
		accent: "border-transparent bg-accent/15 text-primary"
	} },
	defaultVariants: { variant: "muted" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { ChannelDots as n, ContactActions as r, Badge as t };
