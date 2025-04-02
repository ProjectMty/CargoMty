/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cargomty.com'], // Asegúrate de que el dominio esté correcto
  },
  reactStrictMode: true,
  // Agregar configuración para la compilación optimizada en Netlify si es necesario
  output: 'standalone', // Esto puede ser útil para Netlify
  webpack: (config, { isServer }) => {
    // Si es el cliente, define "fs" y otros módulos como falsos para evitar que se utilicen en el lado del cliente
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        http: false,
        https: false,
        stream: false,
        util: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
