export function getCssVariable(name: string): string {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
}

export function setFavicon(color: string = "--accent") {

    const cssColor = getCssVariable(color) || color;

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.00 24.00"
            data-guides="{&quot;vertical&quot;:[],&quot;horizontal&quot;:[]}">
            <defs />
            <path fill="${cssColor}" stroke="${cssColor}" fill-opacity="1" stroke-width="1.8" stroke-opacity="1" id="tSvg6563e6b4d1"
                title="Path 1"
                d="M19.7054 1.9998C14.1637 1.9998 8.6218 1.9998 3.0801 1.9998C6.1078 5.4941 9.1357 8.9885 12.1634 12.4828C9.1089 15.6551 6.0544 18.8275 3 21.9998C8.6374 21.9998 14.2748 21.9998 19.9123 21.9998C19.9123 20.9998 19.9123 19.9998 19.9123 18.9998C19.5513 18.9998 19.1902 18.9998 18.8291 18.9998C18.8291 19.6665 18.8291 20.3331 18.8291 20.9998C14.3568 20.9998 9.8845 20.9998 5.4121 20.9998C8.1349 18.1721 10.8575 15.3445 13.5802 12.5168C10.8311 9.3445 8.0821 6.1721 5.3331 2.9998C9.9004 2.9998 14.4676 2.9998 19.0349 2.9998C19.3671 3.6125 19.6992 4.2251 20.0314 4.8378C20.3542 4.6888 20.677 4.5398 20.9998 4.3908C20.5684 3.5938 20.1368 2.7968 19.7054 1.9998Z"
                style="" />
        </svg>
    `;

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
        link.href = url;
    }
}
