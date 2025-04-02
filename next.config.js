/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cargomty.com'], // Asegúrate de que el dominio esté correcto
  },
  reactStrictMode: true,
  // Agregar configuración para la compilación optimizada en Netlify si es necesario
  output: 'standalone', // Esto puede ser útil para Netlify
  webpack: (config, { isServer }) => {
    // Si deseas personalizar la configuración de Webpack
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
