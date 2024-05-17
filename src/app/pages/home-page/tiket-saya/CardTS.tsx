import { ReaderIcon } from "@radix-ui/react-icons"
import { Badge } from "@/components/ui/badge"
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
import { ModalTS } from "./ModalTS"

type CardProps = React.ComponentProps<typeof Card>

export function CardTS({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle>Yogyakarta - Bandung</CardTitle>
                <CardDescription>Pemberangkatan pada 25 Mei 2024 Pukul 12.00</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    <Badge variant="default" className="bg-amber-500">Proses</Badge>
                </div>
            </CardContent>
            <CardFooter>
                <ModalTS>
                <Button>
                    <ReaderIcon className="mr-2 h-4 w-4" /> Detail
                </Button>
                </ModalTS>
            </CardFooter>
        </Card>
    )
}
