import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"


export default function Confirm({
    trigger,
    title,
    description = "",
    onConfirm,
    onCancel,
}: {
    trigger: React.ReactNode;
    title: string;
    description?: string;
    onConfirm: () => void;
    onCancel: () => void;
}) {
    return (
        <Dialog onOpenChange={(open: boolean) => { if (!open) { onCancel() } }} >
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="hover:cursor-pointer">{trigger}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" onClick={onCancel}>Nevermind</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button variant="destructive" onClick={onConfirm}>Sure</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}