import { FC, useMemo } from 'react';
import { Portal } from 'react-overlays';

import './ToastHost.scss';
import ToastItem from '../ToastItem/ToastItem';
import { useAppSelector } from '@store/index';
import { Toast } from '@utils/toast';

const ToastHost: FC = () => {
  const containerRef: HTMLElement = useMemo(() => document.getElementById('overlay'), []);
  const toasts: Toast[] = useAppSelector(({ toast }) => toast.toasts);

  if (!toasts.length) {
    return;
  }

  return (
    <Portal container={containerRef}>
      <ul className="toast-list">
        {toasts.map((toast) => (
          <ToastItem toast={toast} key={toast.id} />
        ))}
      </ul>
    </Portal>
  );
};

export default ToastHost;
