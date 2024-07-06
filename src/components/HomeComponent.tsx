import React from "react";
import { Block, Button, Flex, Text } from "vcc-ui";
import { useCars } from "./hooks/useCars";
import { CarCard } from "./CarCard";

import styles from "../../public/css/home.module.css";
import { Spacer } from "./Spacer";
import { PaginationDesktop } from "../../public/css/components/PaginationDesktop";

export const HomeComponent: React.FC = () => {
  const { cars } = useCars(); //Chamada da API

  const onClickLeft = () => {};
  const onClickRight = () => {};

  return (
    // <div className={styles.homeWrapper}>
    //   <Text variant="cook">Todos os modelos Recharge</Text>
    //   <Spacer/>
    //   <div className={styles.cardsWrapper}>
    //   {cars.map((car) => (
    //     <CarCard key={car.id} car={car} />
    //   ))}

    //   <PaginationDesktop onClickLeft={onClickLeft} onClickRight={onClickRight}/>
    //   </div>
    // </div>

    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer />

      <div className={styles.cardsWrapperT}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        <PaginationDesktop
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      </div>
    </div>
  );
};
