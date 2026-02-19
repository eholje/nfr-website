import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bli medlem — Norsk Førstehjelpsråd",
  description: "Videresendt til Støtt oss.",
};

export default function BliMedlemRedirect() {
  return (
    <meta httpEquiv="refresh" content="0;url=/stott-oss" />
  );
}
