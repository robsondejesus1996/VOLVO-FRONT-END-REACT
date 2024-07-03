import React from "react";
import { Block, Button } from "vcc-ui";
import { useCars } from "./hooks/useCars";
import { CarCard } from "./CarCard";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();//Chamada da API

  // console.log( cars );

  
  return (
    <Block extend={{ padding: 20 }}>
      {/* <Button>Click me!</Button> */}

      {cars.map(car => <CarCard key={car.id} car={car}/>)}
    </Block>
  );
};
