import pokeball from '../../assets/pokeball-minimalist.png';
import {
  Container,
  PokemonPicture,
  MainInfoContainer,
  PokeIcon,
  MainInfo,
  SubInfoContainer,
  SubInfo,
} from './styles';

interface ICardProps {
  image: any;
  number: number;
  name: string;
  weight: number | string;
  height: number | string;
  type: string;
}

function Card({ image, number, name, weight, height, type }: ICardProps) {
  return (
    <Container>
      <PokemonPicture src={image} />
      <MainInfoContainer>
        <PokeIcon src={pokeball} />
        <MainInfo>
          {number} {name}
        </MainInfo>
      </MainInfoContainer>
      <SubInfoContainer>
        <SubInfo>Peso: {weight} kg</SubInfo>
        <SubInfo>Altura: {height} m</SubInfo>
        <SubInfo>Tipo: {type}</SubInfo>
      </SubInfoContainer>
    </Container>
  );
}

export { Card };
