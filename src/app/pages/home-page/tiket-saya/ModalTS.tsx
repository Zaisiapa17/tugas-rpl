import React, { ReactNode } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



export const ModalTS = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild className='w-1/2 ml-auto'>
                    {children}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Yogyakarta - Bandung</DialogTitle>
                        <DialogDescription>
                            <Card className="mt-5">
                                <CardHeader>
                                    <CardTitle>Notifications</CardTitle>
                                    <CardDescription>You have 3 unread messages.</CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <div>
                                            <div
                                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                            >
                                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        tesitn
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        testing
                                                    </p>
                                                </div>
                                            </div>
                                    </div>
                                </CardContent>
                            </Card>

                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
