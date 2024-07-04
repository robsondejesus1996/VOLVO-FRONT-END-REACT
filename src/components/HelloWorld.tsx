import React from "react";
import { Block, Button, Flex, Spacer, Text } from "vcc-ui";
import { useCars } from "./hooks/useCars";
import { CarCard } from "./CarCard";


import styles from '../../public/css/home.module.css'

export const HelloWorld: React.FC = () => {
  const { cars } = useCars(); //Chamada da API

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      {/* <Spacer/> */}
      <div className={styles.cardsWrapper}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
      </div>
    </div>
  );
};
