import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const notifications = [
    {
        title: "Tanggal pemberangkatan",
        description: "06 Oktober 2024",
    },
    {
        title: "Waktu pemberangkatan",
        description: "12.00 WIB",
    },
    {
        title: "Kursi tersedia",
        description: "11",
    },
    {
        title: "Harga",
        description: "Rp.200,000 / Kursi",
    }
]

type CardProps = React.ComponentProps<typeof Card>

export function CardTujuan({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle>Yogyakarta - Bandung</CardTitle>
                <CardDescription >Pemberangkatan</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full">
                            <CheckIcon className="mr-2 h-4 w-4" /> Pilih
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Pesan Kursi</DialogTitle>
                            <DialogDescription>
                                Pesan kursi dengan maksimal kursi yang tersedia
                            </DialogDescription>
                        </DialogHeader>
                        <Card className={cn("w-[380px]", className)} {...props}>
                            <CardHeader>
                                <CardTitle>Yogyakarta - Bandung</CardTitle>
                                <CardDescription >Pemberangkatan</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div>
                                    {notifications.map((notification, index) => (
                                        <div
                                            key={index}
                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {notification.title}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {notification.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <div className="grid gap-4 py-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Jumlah Kursi
                            </label>
                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Pesan Sekarang</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    )
}
