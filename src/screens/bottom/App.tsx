import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Cat {
  id: number;
  name: string;
}

function Bottom() {
  const catsName: Cat[] = [
    { id: 0, name: "Luffy" },
    { id: 1, name: "Ayah" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Lilly" },
    { id: 4, name: "Oliver" },
    { id: 5, name: "Aurora" },
    { id: 6, name: "Luna" },
    { id: 7, name: "Pietra" },
  ];

  return (
    <>
      <div className="w-full flex justify-center mt-16">
        {catsName.map((cat) => {
          return (
            <Card
              key={cat.id}
              className="mx-4 border-none w-40 h-24 flex justify-center align-middle text-center rounded-3xl"
            >
              <CardHeader className="mt-3">
                <Dialog>
                  <DialogTrigger className="font-bold">
                    {cat.name}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="mb-8">
                        O que você quer ver?
                      </DialogTitle>
                      <DialogDescription>
                        A Lilly é Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Explicabo libero, totam, voluptate
                        molestiae eaque perferendis odio autem aut sequi, quae
                        repudiandae fugit magnam pariatur et. Delectus nostrum
                        quidem ea corrupti.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Bottom;
