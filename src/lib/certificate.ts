export interface Certificate {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    zdjecie: number;
  };
}

export async function getCertificates(): Promise<Certificate[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/certyfikat?per_page=100&orderby=id&order=asc`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch certificates");
  }

  return res.json();
}