type LogoProps = {
  className: string;
  width: number;
  href?: string;
  UrlPage?: string;
  classNameSvg?: string;
};

function Logo(props: LogoProps) {
  return (
    <a className={props.className}>
      <svg
        width={props.width}
        viewBox="0 0 349 318"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.09772 317H276.5C349 317 349 320 349 261.5V0H193.5C-33 0 3.09772 143.5 3.09772 317Z"
          fill="none"
        />
        <path
          d="M292 276.009H250.842V220.028H106.158V276.009H65V161.979C65 145.333 67.8494 130.012 73.5481 116.017C79.2469 102.022 87.1618 89.9877 97.2929 79.9153C107.424 69.8429 119.402 61.997 133.227 56.3776C147.051 50.7583 162.142 47.9486 178.5 47.9486H271.263C274.112 47.9486 276.803 48.4787 279.336 49.539C281.869 50.5992 284.085 52.0836 285.985 53.9921C287.884 55.9005 289.362 58.1271 290.417 60.6717C291.472 63.2163 292 65.9199 292 68.7826V276.009ZM106.158 178.678H250.842V89.2985H178.5C177.234 89.2985 174.543 89.5106 170.427 89.9347C166.417 90.2528 161.72 91.154 156.338 92.6383C151.062 94.1227 145.468 96.4022 139.559 99.477C133.649 102.552 128.214 106.793 123.254 112.2C118.294 117.607 114.178 124.393 110.907 132.557C107.741 140.615 106.158 150.422 106.158 161.979V178.678Z"
          fill="white"
        />
      </svg>
    </a>
  );
}

function LinkedinLogo(props: LogoProps) {
  return (
    <a className={props.className} href={props.UrlPage}>
      <svg
        className={props.classNameSvg}
        width={props.width}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
        />
      </svg>
    </a>
  );
}

function Blogger(props: LogoProps) {
  return (
    // passar props do tailwind
    <div className={props.className}>
      <svg
        width={props.width}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M29.913 13.919c-0.113-0.5-0.425-0.962-0.781-1.156-0.113-0.063-0.813-0.137-1.563-0.169-1.256-0.056-1.394-0.081-1.794-0.313-0.631-0.369-0.8-0.769-0.806-1.844-0.006-2.063-0.863-3.981-2.556-5.706-1.206-1.231-2.556-2.063-4.094-2.531-0.369-0.113-1.194-0.15-3.956-0.181-4.338-0.050-5.3 0.037-6.775 0.625-2.719 1.075-4.669 3.363-5.381 6.287-0.131 0.55-0.163 1.431-0.194 6.494-0.037 6.344 0.006 7.275 0.4 8.531 0.975 3.1 3.744 5.394 6.525 5.894 0.925 0.169 12.331 0.206 13.5 0.050 2.031-0.275 3.625-1.094 5.119-2.619 1.081-1.106 1.756-2.3 2.2-3.881 0.306-1.1 0.281-8.925 0.156-9.481zM9.781 9.944c0.488-0.494 0.625-0.513 3.675-0.513 2.744 0 2.837 0.006 3.238 0.213 0.581 0.294 0.837 0.706 0.837 1.369 0 0.594-0.238 1.012-0.769 1.35-0.287 0.181-0.456 0.194-3.144 0.206-1.656 0.012-2.981-0.025-3.175-0.075-1.038-0.294-1.425-1.781-0.663-2.55zM21.769 22.431l-0.931 0.15-4.844 0.056c-4.256 0.050-5.456-0.025-5.681-0.125-0.444-0.194-0.863-0.731-0.931-1.212-0.069-0.456 0.162-1.081 0.512-1.4 0.444-0.4 0.637-0.412 6.081-0.419 5.6-0.006 5.569-0.006 6.1 0.488 0.756 0.706 0.594 1.95-0.306 2.462z"
        />
      </svg>
    </div>
  );
}

function Whats(props: LogoProps) {
  return (
    // passar props do tailwind
    <div className={props.className}>
      <svg
        width={props.width}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z"
        />
      </svg>
    </div>
  );
}

function IconHTML5(props: LogoProps) {
  return (
    <a className={props.className} href={props.UrlPage}>
      <svg
        width={props.width}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z"
        />
      </svg>
    </a>
  );
}

function IconCSS3(props: LogoProps) {
  return (
    <a className={props.className} href={props.UrlPage}>
      <svg
        width={props.width}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
        />
      </svg>
    </a>
  );
}

function IconJS(props: LogoProps) {
  return (
    <a className={props.className} href={props.UrlPage}>
      <svg
        width={props.width}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
        />
      </svg>
    </a>
  );
}

export { Logo, LinkedinLogo, Blogger, Whats, IconHTML5, IconCSS3 };
