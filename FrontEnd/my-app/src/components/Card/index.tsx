import mewtwo from '../../assets/mewtwo.png';
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

function Card() {
  return (
    <Container>
      <PokemonPicture src={mewtwo} />
      <MainInfoContainer>
        <PokeIcon src={pokeball} />
        <MainInfo>150 Mewtwo</MainInfo>
      </MainInfoContainer>
      <SubInfoContainer>
        <SubInfo>Peso: 122.0 kg</SubInfo>
        <SubInfo>Altura: 2.0 m</SubInfo>
        <SubInfo>Tipo: Psíquico</SubInfo>
      </SubInfoContainer>
    </Container>
  );
}

export { Card };
