import { FC, useEffect, useState } from 'react';

import './ToastItem.scss';
import { ToastTypeI } from '@models/entities/toast.interface';
import { useAppDispatch } from '@store/index';
import { removeToast } from '@store/toast/toast-slice';
import { Icon } from '@components/UI';
import { Toast } from '@utils/toast';

// Same value as $delay in scss;
const DELAY = 500;
const ANIMATION_DURATION = 5000;
const iconMap: {
  [key in ToastTypeI]: string;
} = {
  info: 'info',
  error: 'error',
  success: 'check_circle',
};

type Props = {
  toast: Toast;
};

const ToastItem: FC<Props> = ({ toast: { id, type, message } }) => {
  const dispatch = useAppDispatch();
  const [progressBarWidth, setProgressBarWidth] = useState(100);

  useEffect(() => {
    const widthTimeout = setTimeout(() => {
      setProgressBarWidth(0);
    }, DELAY);

    const destroyTimeout = setTimeout(() => dispatch(removeToast(id)), ANIMATION_DURATION + DELAY);

    return () => {
      clearTimeout(widthTimeout);
      clearTimeout(destroyTimeout);
    };
  }, [dispatch, id]);

  return (
    <li className={`toast-item toast-item--${type}`}>
      <div className="toast-item__content">
        <Icon extendedClass="toast-item__icon">{iconMap[type]}</Icon>
        <p className="toast-item__message">{message}</p>
      </div>
      <div style={{ width: progressBarWidth + '%' }} className="toast-item__progress-bar"></div>
    </li>
  );
};

export default ToastItem;
