import { styled } from "styled-components";

const BgDots = styled.div`
    &::before {
        content: "";
        -webkit-mask-composite: source-in;
        background-image: radial-gradient(circle, var(--accent) 1px,#0000 1px);
        background-size: 50px 50px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-mask: linear-gradient(90deg,#0000 0%,#000 35% 55%,#0000 100%),linear-gradient(#0000 0%,#000 35% 55%,#0000 100%);
        mask: linear-gradient(90deg,#0000 0%,#000 35% 55%,#0000 100%),linear-gradient(#0000 0%,#000 35% 55%,#0000 100%);
    }
`

function BackgroundDots() {
    return <BgDots className="w-full h-full overflow-hidden relative" />
}

export default BackgroundDots;