import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  color: string;
}

export default function ProgramCard({
  title,
  description,
  image,
  duration,
  level,
  color,
}: ProgramCardProps) {
  return (
    <Card
      className={`overflow-hidden bg-card border-2 ${color} hover:shadow-xl transition-all duration-300 hover:-skew-1 flex flex-col py-0 gap-4`}
    >
      <div className="relative h-48 w-full bg-muted">
        <Image
          src={image || "https://placehold.co/600x400"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">
            {duration}
          </span>
          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
            {level}
          </span>
        </div>

        <Button
          asChild
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <a href="/join">Enroll Now</a>
        </Button>
      </div>
    </Card>
  );
}
