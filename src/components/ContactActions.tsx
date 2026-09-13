import { MessageCircle, Phone, Send, Users, Video } from "lucide-react";
import { digitsPhone, type ContactChannels } from "@/types/rental";
import { Button } from "@/components/ui/button";

export function ContactActions({
  contact,
  size = "default",
}: {
  contact: ContactChannels;
  size?: "default" | "sm";
}) {
  const digits = digitsPhone(contact.phone);
  const wa = digits.startsWith("880") ? digits : digits.replace(/^0/, "880");
  const tel = digits.startsWith("880") ? `+${digits}` : contact.phone;
  const telegramHref = contact.telegramHandle
    ? `https://t.me/${contact.telegramHandle.replace(/^@/, "")}`
    : `https://t.me/+${wa}`;

  const actions = [
    {
      key: "call",
      label: "Call",
      href: `tel:${tel}`,
      icon: Phone,
      show: true,
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: `https://wa.me/${wa}`,
      icon: MessageCircle,
      show: contact.whatsapp,
    },
    {
      key: "telegram",
      label: "Telegram",
      href: telegramHref,
      icon: Send,
      show: contact.telegram,
    },
    {
      key: "imo",
      label: "IMO",
      href: `tel:${tel}`,
      icon: Video,
      show: contact.imo,
    },
    {
      key: "teams",
      label: "Teams",
      href: contact.teamsLink ?? "https://teams.microsoft.com/",
      icon: Users,
      show: contact.teams,
    },
  ].filter((a) => a.show);

  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Button key={action.key} size={size} variant="outline" asChild>
            <a href={action.href} target={action.key === "call" || action.key === "imo" ? undefined : "_blank"} rel="noreferrer">
              <Icon />
              {action.label}
            </a>
          </Button>
        );
      })}
    </div>
  );
}

export function ChannelDots({ contact }: { contact: ContactChannels }) {
  const channels = [
    contact.whatsapp && "WhatsApp",
    contact.telegram && "Telegram",
    contact.imo && "IMO",
    contact.teams && "Teams",
  ].filter(Boolean) as string[];

  if (channels.length === 0) {
    return <span className="text-xs text-muted">Call only</span>;
  }

  return (
    <span className="flex flex-wrap gap-1">
      {channels.map((name) => (
        <span
          key={name}
          className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium tracking-wide text-secondary-foreground uppercase"
        >
          {name}
        </span>
      ))}
    </span>
  );
}
