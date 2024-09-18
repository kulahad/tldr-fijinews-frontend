import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function news({
  title,
  summary,
  article_url,
  // image_url,
  source,
}: News) {
  return (
    <Card className="m-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={`/${source}.jpg`} />
          </Avatar>
          <CardDescription className="ml-2">{source}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="pb-1 font-light">{summary}</p>
      </CardContent>
      <CardFooter>
        <Button>
          <Link href={article_url} target="_blank">
            Read more
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
