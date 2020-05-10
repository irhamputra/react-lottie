import * as React from 'react';
import lottie, { AnimationConfig, AnimationItem } from 'lottie-web';

export const useLottie = (props: AnimationConfig, style: object) => {
  const animationInstance = React.useRef<AnimationItem | null>(null);
  const animationContainer = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      ...props,
      container: animationContainer.current,
    }) as any;
  }, []);

  const play = React.useCallback(() => {
    if (animationInstance.current) {
      animationInstance.current.play();
    }
  }, []);

  const pause = React.useCallback(() => {
    if (animationInstance.current) {
      animationInstance.current.pause();
    }
  }, []);

  const stop = React.useCallback(() => {
    if (animationInstance.current) {
      animationInstance.current.stop();
    }
  }, []);

  const View = <div ref={animationContainer} style={style} />;

  return {
    View,
    play,
    pause,
    stop,
  };
};
