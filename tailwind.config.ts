import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blushWhite: '#FFF8FB',
        lightBlush: '#FCEEF5',
        softPink: '#F7D9E8',
        premiumPink: '#EFB8D1',
        accentPink: '#D98BB2',
        mauveText: '#8C5A72',
        deepAccent: '#5E3B4D'
      },
      boxShadow: {
        premium: '0 18px 50px -18px rgba(94, 59, 77, 0.35)',
        softGlow: '0 10px 35px -15px rgba(217, 139, 178, 0.55)'
      },
      backgroundImage: {
        roseGlow:
          'radial-gradient(circle at 20% 20%, rgba(247, 217, 232, 0.75), transparent 45%), radial-gradient(circle at 80% 0%, rgba(239, 184, 209, 0.5), transparent 32%), radial-gradient(circle at 50% 80%, rgba(252, 238, 245, 0.95), transparent 55%)'
      }
    }
  },
  plugins: []
};

export default config;
