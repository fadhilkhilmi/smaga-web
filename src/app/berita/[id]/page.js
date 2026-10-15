import DetailBeritaClient from "@/components/DetailBeritaClient";

export default async function DetailBerita({ params }) {
  const { id } = await params;

  return <DetailBeritaClient id={id} />;
}
