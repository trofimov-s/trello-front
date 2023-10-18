import { FC, PropsWithChildren } from 'react';
import { Overlay } from 'react-overlays';
import cn from 'classnames';

import './OverlayHost.scss';
import { Placement } from 'react-overlays/cjs/usePopper';

// TODO: REMOVE THIS COMPONENT
export const Content: FC<{ message: string }> = ({ message }) => {
  return <div>{message}</div>;
};

type Props = {
  targetRef: React.MutableRefObject<HTMLElement>;
  containerRef: React.MutableRefObject<HTMLElement>;
  onHide: (isShow: boolean) => void;
  offset?: [number, number];
  placement?: Placement;
  show: boolean;
};

const OverlayHost: FC<PropsWithChildren<Props>> = ({
  targetRef,
  containerRef,
  children,
  onHide,
  offset = [0, 10],
  placement = 'bottom',
  show,
}) => {
  if (!show) {
    return null;
  }

  return (
    <Overlay
      show={true}
      rootClose={true}
      onHide={() => onHide(false)}
      offset={offset}
      placement={placement}
      container={targetRef}
      target={containerRef}
      flip={true}
    >
      {({ props }) => (
        <div className={cn(['overlay-host', { show: show }])} {...props}>
          {children}
        </div>
      )}
    </Overlay>
  );
};

export default OverlayHost;
