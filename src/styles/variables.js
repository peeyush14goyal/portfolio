import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #0a101c;
    --navy: #1e273a;
    --light-navy: #34496b;
    --lightest-navy: #465b77;
    --navy-shadow: rgba(2, 12, 27, 0.4);
    --dark-slate: #707c91;
    --slate: #a0aec0;
    --light-slate: #ccd6f6;
    --lightest-slate: #f8fafc;
    --white: rgba(255, 255, 255, 0.87);
    --green: #22d3ee;
    --green-tint: rgba(182, 237, 210, 0.1);
    --pink: #de7bf7;
    --blue: #4fc3f7;

    --font-sans:
      "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
      system-ui, sans-serif;
    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after:
      bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active:
      bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
