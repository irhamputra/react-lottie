import * as React from 'react';
import lottie, { AnimationConfig } from 'lottie-web';

export const useLottie = (props: AnimationConfig) => {
  const animationInstance = React.useRef(null);
  const animationContainer = React.useRef<AnimationConfig | null>(null);

  React.useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      ...props,
      container: animationContainer.current,
    }) as any;
  }, []);

  const play = React.useCallback(() => {}, []);

  const pause = React.useCallback(() => {}, []);

  const stop = React.useCallback(() => {}, []);

  return {
    play,
    pause,
    stop,
  };
};
