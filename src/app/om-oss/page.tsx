import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss — Norsk Førstehjelpsråd",
  description: "Videresendt til Om NFR.",
};

export default function OmOssRedirect() {
  return (
    <meta httpEquiv="refresh" content="0;url=/om-nfr" />
  );
}
