"use client";

import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

type TrackLinkProps = PropsWithChildren<
  LinkProps & {
    event: AnalyticsEventName;
    props?: Record<string, unknown>;
    className?: string;
    prefetch?: boolean;
  }
>;

export default function TrackLink({ event, props, children, onClick, ...rest }: TrackLinkProps & { onClick?: React.MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        trackEvent(event, props);
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
