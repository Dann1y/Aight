import { ResponsiveValue, TLengthStyledSystem } from "styled-system";

export default interface ModalInfo {
  id?: number;
  width?: ResponsiveValue<TLengthStyledSystem>;
  height?: ResponsiveValue<TLengthStyledSystem>;
  title: string;
  message?: string;
  element?: JSX.Element;
  confirmLabel?: string;
  confirmAction?: () => void;
  closeLabel?: string;
  closeAction?: () => void;
  showOnlyBody?: boolean;
  withoutConfirm?: boolean;
}
