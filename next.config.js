/** @type {import('next').NextConfig} */

// Obrazki z WordPressa mogą być optymalizowane przez Next tylko z dozwolonych hostów.
// Host produkcyjnego WordPressa brany jest ze zmiennej WORDPRESS_API_URL,
// lokalny (jm-studio-cms.local) zostaje do pracy na komputerze.
function wordpressImagePatterns() {
  const patterns = [
    { protocol: "http", hostname: "jm-studio-cms.local" },
    { protocol: "https", hostname: "jm-studio-cms.local" },
  ];

  try {
    if (process.env.WORDPRESS_API_URL) {
      const url = new URL(process.env.WORDPRESS_API_URL);
      patterns.push({ protocol: url.protocol.replace(":", ""), hostname: url.hostname });
    }
  } catch {
    console.warn("WORDPRESS_API_URL nie jest poprawnym adresem URL:", process.env.WORDPRESS_API_URL);
  }

  return patterns;
}

const nextConfig = {
  images: {
    remotePatterns: wordpressImagePatterns(),
  },
};

module.exports = nextConfig;
