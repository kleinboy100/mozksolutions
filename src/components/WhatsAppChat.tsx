import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppChat() {
  return (
    <Button asChild size="icon" className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-elegant">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>
    </Button>
  );
}