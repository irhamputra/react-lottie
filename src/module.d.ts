declare namespace Lottie {
  export interface AnimationItem {
    play(): boolean;

    stop(): boolean;

    pause(): boolean;

    // one param speed (1 is normal speed)
    setSpeed(speed: number): void;

    // one param direction (1 is normal direction)
    setDirection(direction: number): void;

    // If false, it will respect the original AE fps. If true, it will update as much as possible. (true by default)
    setSubframe(flag: boolean): void;

    // first param is a numeric value. second param is a boolean that defines time or frames for first param
    goToAndPlay(value: number, isFrame: boolean): void;

    // first param is a numeric value. second param is a boolean that defines time or frames for first param
    goToAndStop(value: number, isFrame: boolean): void;

    // first param is a single array or multiple arrays of two values each(fromFrame,toFrame), second param is a boolean for forcing the new segment right away
    playSegments(segments: number[] | number[][], forceFlag: boolean): void;

    // To destroy and release resources.
    destroy(): void;
  }

  export interface AnimationConfig {
    // an Object with the exported animation data.
    animationData?: any;

    // the relative path to the animation object. (animationData and path are mutually exclusive)
    path?: string;

    // true / false / number
    loop?: boolean | number;

    // true / false it will start playing as soon as it is ready
    autoplay?: boolean;

    // animation name for future reference
    name?: string;

    // 'svg' / 'canvas' / 'html' to set the renderer
    renderer?: string;

    // the dom element on which to render the animation
    container?: any;
  }
}

declare class LottyPlayer {
  // optional parameter name to target a specific animation
  play(name?: string): void;

  // optional parameter name to target a specific animation
  stop(name?: string): void;

  // first param speed (1 is normal speed) with 1 optional parameter name to target a specific animation
  setSpeed(speed: number, name?: string): void;

  // first param direction (1 is normal direction.) with 1 optional parameter name to target a specific animation
  setDirection(direction: number, name?: string): void;

  // default 'high', set 'high','medium','low', or a number > 1 to improve player performance. In some animations as low as 2 won't show any difference.
  setQuality(quality: string | number): void;

  // param usually pass as location.href. Its useful when you experience mask issue in safari where your url does not have # symbol.
  setLocationHref(href: string): void;

  // returns an animation instance to control individually.
  loadAnimation(params: Lottie.AnimationConfig): Lottie.AnimationItem;

  // you can register an element directly with registerAnimation. It must have the "data-animation-path" attribute pointing at the data.json url
  registerAnimation(element: any, animationData?: any): void;

  // To destroy and release resources. The DOM element will be emptied.
  destroy(name?: string): void;
}

declare const Lottie: LottyPlayer;

declare module 'lottie-web' {
  export = Lottie;
}
