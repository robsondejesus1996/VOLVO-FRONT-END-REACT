import { Block, Card, CardContent, Flex, Spacer, Text, Row, Link } from "vcc-ui";
import { Car } from "./types/car.interface";
import Image from "next/image";


import styles from '../../public/css/CarCard.module.css';

interface CardProps {
  car: Car // minha tipagem de car
}

export function CarCard({car }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
     
      <Text variant="bates" subStyle="emphasis">{car?.bodyType}</Text>
        <Flex>
          <Row>
            <Text variant="amundsen">{car?.modelName}</Text>
            <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>

          </Row>
        </Flex>
        <Spacer />
        <Image src={car.imageUrl} alt={car.modelName} width="200" height="150"/>
        <Spacer />

        <Flex extend={{
          justifyContent: 'center',
          alignItems: 'center', 
          flexDirection: 'row'
        }}>

          
            <Link href="https://www.volvocars.com/" arrow="right">
              SHOP
            </Link>

            <Link href="https://www.volvocars.com/" arrow="right">
              LEARN
            </Link>
          
        </Flex>
      
    </div>
  );
}
