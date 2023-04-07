/* eslint-disable @typescript-eslint/no-explicit-any */
export const phoneStringToLink = (tel: string) =>
  tel.split(' ').join('').replace('+', '');

export const FB_PIXEL_ID = '743687677423485';

export const pageview = () => {
  (window as any).fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  (window as any).fbq('track', name, options);
};
