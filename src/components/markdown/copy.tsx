import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Copy({ content }: { content: string }) {
  return (
    <Button
      className="border"
      data-copy-content={content}
      data-mdx-copy
      size="xs"
      type="button"
      variant="secondary"
    >
      <CopyIcon className="h-3 w-3" data-copy-icon />
      <CheckIcon className="hidden h-3 w-3" data-check-icon />
      <span aria-live="polite" className="sr-only" data-copy-status>
        Copy code
      </span>
    </Button>
  );
}
