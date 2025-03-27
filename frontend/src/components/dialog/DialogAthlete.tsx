import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/Dialog';

function DialogAthlete({
  mode,
  children
}: {
  mode: 'create' | 'update';
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{mode === 'create' ? 'Create' : 'Update'} Athlete</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogAthlete;
