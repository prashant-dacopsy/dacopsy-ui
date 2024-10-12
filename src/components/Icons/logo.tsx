interface CompanyLogoProps {
  size?: string | number;
  type?: 'dark' | 'light' | 'contrast';
}

const variant = {
  dark: {
    outerfill: '#fff',
    shapefill: '#1255CC',
  },
  light: {
    outerfill: '#1255CC',
    shapefill: '#fff',
  },
  contrast: {
    outerfill: '#333333',
    shapefill: '#fff',
  },
};
const CompanyLogo: React.FC<CompanyLogoProps> = ({
  type = 'dark',
  size = 40,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={50} height={50} rx="7" fill={variant[type].outerfill} />
      <path
        d="M32.5337 13.0909H37.3558V22.3278C37.3558 24.6403 36.8697 26.598 35.8974 28.201C34.9338 29.7952 33.5936 31.0084 31.8768 31.8406C30.1687 32.6727 28.1978 33.0888 25.9641 33.0888H24.0589C21.8165 33.0888 19.8369 32.6727 18.12 31.8406C16.4032 31.0084 15.063 29.7952 14.0994 28.201C13.1359 26.598 12.6541 24.6403 12.6541 22.3278V13.0909H17.4237V22.3278C17.4237 23.8081 17.6908 25.052 18.2251 26.0593C18.7682 27.0579 19.5478 27.8156 20.5639 28.3324C21.58 28.8404 22.7976 29.0945 24.2166 29.0945H26.0955C27.3919 29.0945 28.5219 28.8667 29.4854 28.4112C30.449 27.947 31.1979 27.2199 31.7322 26.2301C32.2666 25.2315 32.5337 23.9308 32.5337 22.3278V13.0909ZM27.5014 13.0909V40H22.7056V13.0909H27.5014Z"
        fill={variant[type].shapefill}
      />
    </svg>
  );
};

export default CompanyLogo;
