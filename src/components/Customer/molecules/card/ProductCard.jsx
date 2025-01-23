import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

function ProductCard(){
  return(
<Card>
  <CardContent>
    <div>
      <img src="https://picsum.photos/300/200" alt="" className="object-cover rounded" />
    </div>

    <p>que bonito es mi producto</p></CardContent>
  <CardFooter>
    <p>Footer</p>
  </CardFooter>
</Card>
  );
};

export default ProductCard
