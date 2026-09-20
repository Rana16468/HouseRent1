import { MessageCircle, Phone, Send, Users, Video } from "lucide-react";
import { digitsPhone, type ContactChannels } from "@/types/rental";
import { Button } from "@/components/ui/button";

interface ContactActionsProps {
  contact: ContactChannels;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function ContactActions({
  contact,
  size = "default",
  className,
}: ContactActionsProps) {
  // ফোন নম্বর ফরম্যাটিং
  const digits = digitsPhone(contact.phone || "");
  const wa = digits.startsWith("880") ? digits : digits.replace(/^0/, "880");
  const tel = digits.startsWith("880") ? `+${digits}` : contact.phone;

  const telegramHref = contact.telegramHandle
    ? `https://t.me/${contact.telegramHandle.replace(/^@/, "")}`
    : `https://t.me/+${wa}`;

  // অ্যাকশন বাটন কনফিগারেশন
  const actions = [
    {
      key: "call",
      label: "Call",
      href: `tel:${tel}`,
      icon: Phone,
      show: Boolean(contact.phone),
      external: false,
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: `https://wa.me/${wa}`,
      icon: MessageCircle,
      show: Boolean(contact.whatsapp),
      external: true,
    },
    {
      key: "telegram",
      label: "Telegram",
      href: telegramHref,
      icon: Send,
      show: Boolean(contact.telegram),
      external: true,
    },
    {
      key: "imo",
      label: "IMO",
      href: "https://imo.im/",
      icon: Video,
      show: Boolean(contact.imo),
      external: true,
    },
    {
      key: "teams",
      label: "Teams",
      href: contact.teamsLink || "https://teams.microsoft.com/",
      icon: Users,
      show: Boolean(contact.teams),
      external: true,
    },
  ].filter((a) => a.show);

  return (
    <div className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Button key={action.key} size={size} variant="outline" asChild>
            <a
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{action.label}</span>
            </a>
          </Button>
        );
      })}
    </div>
  );
}

export function ChannelDots({ contact }: { contact: ContactChannels }) {
  const digits = digitsPhone(contact.phone || "");
  const wa = digits.startsWith("880") ? digits : digits.replace(/^0/, "880");
  const channels = [
    contact.whatsapp && { name: "WhatsApp", href: `https://wa.me/${wa}` },
    contact.telegram && {
      name: "Telegram",
      href: contact.telegramHandle
        ? `https://t.me/${contact.telegramHandle.replace(/^@/, "")}`
        : `https://t.me/+${wa}`,
    },
    contact.imo && { name: "IMO", href: "https://imo.im/" },
    contact.teams && {
      name: "Teams",
      href: contact.teamsLink || "https://teams.microsoft.com/",
    },
  ].filter(Boolean) as { name: string; href: string }[];

  if (channels.length === 0) {
    return <span className="text-xs text-muted-foreground">Call only</span>;
  }

  return (
    <div className="flex flex-wrap items-center gap-1">
      {channels.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name}`}
          className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium tracking-wide text-secondary-foreground uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {name}
        </a>
      ))}
    </div>
  );
}