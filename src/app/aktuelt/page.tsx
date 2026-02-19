import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktuelt — Norsk Førstehjelpsråd",
  description: "Videresendt til Nyheter og innsikt.",
};

export default function AktueltRedirect() {
  return (
    <meta httpEquiv="refresh" content="0;url=/nyheter-og-innsikt" />
  );
}
