export interface PlansType {
  id: number;
  title: string;
  price: string;
  quality: string;
  resolution: string;
  devices: string;
  simultaneous: number;
  downloads: number;
  popular: boolean;
}

export const plans: PlansType[] = [
  {
    id: 1,
    title: 'Basic',
    price: '₹199',
    quality: 'Good',
    resolution: '720p (HD)',
    devices: 'TV, computer, mobile phone, tablet',
    simultaneous: 1,
    downloads: 1,
    popular: true,
  },
  {
    id: 2,
    title: 'Standard',
    price: '₹499',
    quality: 'Great',
    resolution: '1080p (Full HD)',
    devices: 'TV, computer, mobile phone, tablet',
    simultaneous: 2,
    downloads: 2,
    popular: false,
  },
  {
    id: 3,
    title: 'Premium',
    price: '₹649',
    quality: 'Best',
    resolution: '4K (Ultra HD) + HDR',
    devices: 'TV, computer, mobile phone, tablet',
    simultaneous: 4,
    downloads: 6,
    popular: false,
  },
];
