import { HTMLAttributes, ReactNode } from 'react';

declare module '@/components/ui/decrypted-text' {
  export interface DecryptedTextProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    delay?: number;
    duration?: number;
  }
  
  const DecryptedText: React.FC<DecryptedTextProps>;
  export default DecryptedText;
}
