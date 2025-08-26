import { CircleAlert, Info } from 'lucide-react';
import * as React from 'react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { useDisclosure } from '@/hooks/use-disclosure';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

export type ConfirmationDialogProps = {
  triggerButton?: React.ReactElement;
  confirmButton: React.ReactElement;
  title: string;
  body?: string;
  cancelButtonText?: string;
  icon?: 'danger' | 'info';
  isDone?: boolean;
  open: boolean;
  setOpen: any;
};

export const ConfirmationDialog = ({
  confirmButton,
  title,
  body = '',
  cancelButtonText = 'Cancel',
  icon = 'danger',
  isDone = false,
  setOpen,
  open,
}: ConfirmationDialogProps) => {
  const cancelButtonRef = React.useRef(null);

  useEffect(() => {
    if (isDone) {
      setOpen(false);
    }
  }, [isDone]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex">
          <DialogTitle className="flex items-center gap-2">
            {' '}
            {icon === 'danger' && (
              <CircleAlert className="size-6 text-red-600" aria-hidden="true" />
            )}
            {icon === 'info' && (
              <Info className="size-6 text-blue-600" aria-hidden="true" />
            )}
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          {body && (
            <div className="mt-2">
              <p>{body}</p>
            </div>
          )}
        </div>

        <DialogFooter>
          {confirmButton}
          <Button
            ref={cancelButtonRef}
            variant="outline"
            onClick={() => setOpen(false)}
          >
            {cancelButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};