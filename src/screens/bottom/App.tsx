import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    { id: 8, name: "Kevin" },
  ];

  function carouselSize() {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm flex items-center"
      >
        <CarouselContent className="-ml-1">
          {catsName.map((cat) => (
            <CarouselItem key={cat.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 w-32 lg:space-x-12">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{cat.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

  return (
    <>
      <div className="w-full h-80 flex justify-center relative bottom-0 left-0">
        {carouselSize()}
      </div>
      {/* <div className="w-full flex justify-center mt-16">
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
      </div> */}
    </>
  );
}

export default Bottom;
