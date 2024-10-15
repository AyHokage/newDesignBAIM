import * as React from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const CompanyIcon = ({
  width = 123,
  height = 123,
  color = "#989898",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <g clipPath="url(#a)">
      <path
        fill={color}
        d="M36 68.78a1.44 1.44 0 0 1-2.88 0V33.51H2.88v71.08h4.99a1.44 1.44 0 0 1 0 2.88H1.44c-.8 0-1.44-.65-1.44-1.44V32.74c0-.58.24-1.11.62-1.5.38-.38.91-.62 1.5-.62h31V2.53c0-.69.28-1.33.74-1.78V.74C34.32.28 34.95 0 35.65 0H87c.7 0 1.33.28 1.79.74l.11.12c.39.45.64 1.03.64 1.67v28.09h31.22c.58 0 1.11.24 1.49.62l.01.01c.38.38.62.91.62 1.49v73.29c0 .8-.65 1.44-1.44 1.44h-9.14a1.44 1.44 0 0 1 0-2.88h7.7V33.51H89.53v34.85a1.44 1.44 0 0 1-2.88 0V2.88H36v65.9Zm61.15-.24h15.9c.13 0 .24.08.24.17v4.7c0 .1-.11.18-.24.18h-15.9c-.13 0-.24-.08-.24-.18v-4.7c0-.09.11-.17.24-.17Zm-87.44 0h15.9c.13 0 .24.08.24.17v4.7c0 .1-.11.18-.24.18H9.71c-.13 0-.24-.08-.24-.18v-4.7c0-.09.11-.17.24-.17ZM42.46 8.47H80.2c.63 0 1.15.52 1.15 1.15v12.31c0 .63-.52 1.15-1.15 1.15H42.46c-.63 0-1.15-.52-1.15-1.15V9.62c-.01-.63.51-1.15 1.15-1.15Zm54.94 96.55c-1.05-2.11-2.38-3.9-3.94-5.58 2.92 1.13 5.91 2.25 8.12 3.64 4.02 2.52 4.32 5.57 4.65 9.95H86.3v-.1l-.37-3.13 1.43 1.24 7-6.09 3.04.07Zm-71.32-4.94 2.53 7.44 1.27-4.42-.62-.68c-.28-.41-.34-.77-.19-1.08.34-.67 1.04-.54 1.69-.54.68 0 1.53-.13 1.74.73.07.29-.02.59-.22.9l-.62.68 1.27 4.42 2.29-7.44c.33.3.8.55 1.34.77-.19.4-.36.81-.51 1.25-.39 1.13-.64 2.38-.75 3.77h.01c0 .03 0 .07-.01.1l-.55 7.06H16.44c-1.1-.08-1.66-.65-1.75-1.63l.38-3.9c.11-1.39.5-2.48 1.13-3.32.42-.55.94-.96 1.51-1.28 1.82-1.05 6.72-1.34 8.37-2.83Zm-1.24-10.55c-.25.02-.43.08-.57.16a.47.47 0 0 0-.17.2c-.04.09-.06.21-.06.34.01.41.23.96.66 1.59l.01.01 1.41 2.25c.56.9 1.16 1.81 1.88 2.48.69.63 1.54 1.06 2.65 1.07 1.21 0 2.09-.44 2.81-1.11.75-.7 1.35-1.68 1.94-2.65l1.59-2.62c.32-.73.42-1.17.32-1.38-.06-.13-.33-.16-.76-.13-.28.06-.56.01-.87-.15l.79-2.38c-2.91-.04-4.91-.54-7.26-2.05-.77-.49-1.01-1.06-1.78-1.01-.59.11-1.08.38-1.47.8-.38.4-.66.95-.84 1.66l.47 2.86c-.25.15-.5.16-.75.06Zm12.61-.71c.34.1.59.3.75.6.24.49.15 1.21-.3 2.23l-.03.06-1.61 2.65c-.62 1.03-1.26 2.06-2.11 2.86-.89.83-1.98 1.38-3.48 1.38-1.4 0-2.45-.54-3.31-1.33-.83-.76-1.46-1.73-2.05-2.68l-1.41-2.25c-.53-.79-.8-1.51-.82-2.1-.01-.29.04-.55.15-.78.11-.24.29-.45.52-.6.11-.08.24-.14.39-.19-.09-1.2-.12-2.69-.06-3.95.03-.31.09-.61.17-.92.36-1.29 1.27-2.33 2.39-3.04.4-.25.83-.46 1.29-.63 2.72-.98 6.32-.45 8.25 1.64.79.85 1.28 1.98 1.38 3.47l-.11 3.58Zm14.23-9.96c-.32.04-.56.12-.74.23-.12.08-.2.18-.25.29-.06.14-.09.31-.09.5.02.61.35 1.43.98 2.37l.01.02 2.11 3.36c.84 1.34 1.72 2.7 2.81 3.7 1.04.95 2.29 1.59 3.95 1.59 1.8 0 3.12-.66 4.18-1.66 1.12-1.05 2.02-2.5 2.89-3.95l2.37-3.9c.48-1.09.62-1.75.47-2.05-.1-.2-.51-.25-1.21-.18H69c-.29 0-.6-.07-.95-.23l1.07-3.56c-4.35-.05-7.32-.81-10.84-3.06-1.16-.74-1.5-1.58-2.66-1.5-.87.17-1.61.56-2.19 1.19-.56.6-.98 1.42-1.26 2.48l.75 4.31c-.43.2-.85.22-1.24.05Zm1.96 15.73 3.78 11.11 1.9-6.59-.93-1.02c-.42-.61-.51-1.15-.28-1.61.5-1 1.55-.81 2.52-.81 1.02 0 2.28-.19 2.6 1.08.11.43-.03.87-.33 1.34l-.93 1.02 1.9 6.59 3.42-11.11c2.47 2.22 8.82 2.67 11.54 4.18.74.41 1.41.92 1.98 1.57.01-.07.03-.15.07-.21.3-.59.92-.48 1.5-.48.61 0 1.36-.11 1.55.65.06.25-.02.52-.19.8l-.55.61 1.13 3.92-1.45 1.15.48 6.29c-.14 1.47-.97 2.31-2.61 2.44H40.2c-1.64-.13-2.47-.97-2.61-2.44l.57-7.41c.16-2.07.74-3.71 1.69-4.96.62-.82 1.4-1.43 2.26-1.91 2.71-1.53 9.06-1.98 11.53-4.2Zm16.96-16.8c.51.15.89.44 1.12.9.36.73.22 1.8-.45 3.33-.01.03-.03.06-.04.09l-2.41 3.96c-.93 1.54-1.88 3.07-3.15 4.26-1.33 1.24-2.96 2.07-5.19 2.06-2.09 0-3.66-.8-4.95-1.98-1.24-1.13-2.17-2.58-3.07-4l-2.11-3.36c-.79-1.17-1.19-2.25-1.22-3.14-.01-.43.06-.82.22-1.16.17-.36.43-.67.78-.9.17-.12.37-.21.58-.29-.13-1.8-.17-4.02-.09-5.89.05-.46.13-.91.26-1.37.54-1.93 1.89-3.48 3.57-4.54.59-.38 1.24-.69 1.92-.93 4.05-1.47 9.43-.67 12.31 2.45 1.17 1.27 1.91 2.95 2.07 5.17l-.15 5.34Zm7.33 18.34 1.86-.05 1.55-.04c-1.8-5.55-1.2-10.65 3.14-14.99.74 2.38 2.39 4.35 5.2 5.8 1.34 1 2.64 2.2 3.9 3.59.22-.92-.63-2.03-1.66-3.18.95.47 1.83 1.13 2.45 2.4.72 1.47.71 2.71.47 4.31-.11.74-.29 1.44-.55 2.07h2.57c2.71-5.8.99-14.41-4.55-18.06-1.7-1.12-2.92-1.08-4.92-1.08-2.28 0-3.45.07-5.41 1.37-2.88 1.91-4.66 5.21-5.4 9.79-.15 2.29-.25 6.24 1.35 8.07Zm19.22-37.86h15.9c.13 0 .24.08.24.18v4.7c0 .1-.11.18-.24.18h-15.9c-.13 0-.24-.08-.24-.18v-4.7c0-.1.11-.18.24-.18Zm0-10.28h15.9c.13 0 .24.08.24.18v4.7c0 .1-.11.18-.24.18h-15.9c-.13 0-.24-.08-.24-.18v-4.7c0-.1.11-.18.24-.18ZM9.71 58.27h15.9c.13 0 .24.08.24.18v4.7c0 .1-.11.18-.24.18H9.71c-.13 0-.24-.08-.24-.18v-4.7c0-.1.11-.18.24-.18Zm0-10.28h15.9c.13 0 .24.08.24.18v4.7c0 .1-.11.18-.24.18H9.71c-.13 0-.24-.08-.24-.18v-4.7c0-.1.11-.18.24-.18Zm61.96 1.09h8.49c.13 0 .24.11.24.24v8.49c0 .13-.11.24-.24.24h-8.49c-.13 0-.24-.11-.24-.24v-8.49c0-.13.11-.24.24-.24Zm-14.59 0h8.49c.13 0 .24.11.24.24v8.49c0 .13-.11.24-.24.24h-8.49c-.13 0-.24-.11-.24-.24v-8.49c0-.13.11-.24.24-.24Zm-14.59 0h8.49c.13 0 .24.11.24.24v8.49c0 .13-.11.24-.24.24h-8.49c-.13 0-.24-.11-.24-.24v-8.49c0-.13.11-.24.24-.24Zm29.18-16.47h8.49c.13 0 .24.11.24.24v8.49c0 .13-.11.24-.24.24h-8.49c-.13 0-.24-.11-.24-.24v-8.49c0-.14.11-.24.24-.24Zm-14.59 0h8.49c.13 0 .24.11.24.24v8.49c0 .13-.11.24-.24.24h-8.49c-.13 0-.24-.11-.24-.24v-8.49c0-.14.11-.24.24-.24Zm-14.59 0h8.49c.13 0 .24.11.24.24v8.49c0 .13-.11.24-.24.24h-8.49c-.13 0-.24-.11-.24-.24v-8.49c0-.14.11-.24.24-.24Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h122.88v115.49H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CompanyIcon;