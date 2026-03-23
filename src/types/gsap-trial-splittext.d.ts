declare module "gsap-trial/SplitText" {
  import { Element as GstElement } from "gsap";

  interface SplitTextOptions {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    absolute?: boolean;
    refresh?: boolean;
    [key: string]: any;
  }

  class SplitText {
    constructor(targets: string | HTMLElement | Array<string | HTMLElement>, vars?: SplitTextOptions);

    targets: Array<HTMLElement>;
    chars: Array<HTMLElement>;
    words: Array<HTMLElement>;
    lines: Array<HTMLElement>;
    elements: Array<HTMLElement>;

    revert(): void;
    split(type?: string): void;
    applyStyle(styleVars: { [key: string]: any }): void;
  }

  export { SplitText };
  export default SplitText;
}
