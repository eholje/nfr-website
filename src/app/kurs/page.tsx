import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurs — Norsk Førstehjelpsråd",
  description: "Videresendt til Kurs og opplæring.",
};

export default function KursRedirect() {
  return (
    <meta httpEquiv="refresh" content="0;url=/kurs-og-opplaering" />
  );
}
