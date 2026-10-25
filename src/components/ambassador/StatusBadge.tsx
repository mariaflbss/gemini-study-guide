import { STATUS_LABEL } from "../../lib/content";
import type { WeekStatus } from "../../lib/types";

export default function StatusBadge({ status }: { status: WeekStatus }) {
  return (
    <span className={`status status--${status}`}>
      <span className="status__dot" aria-hidden="true" />
      {STATUS_LABEL[status]}
    </span>
  );
}
