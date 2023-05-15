
import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Cards from './Cards';

export default function Adidas() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Entretenimento/Anime/YNM.jpg"),
      titulo: "Your Name",
      descricao: "Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos.",
    },
    {
      id:"2",
      imagem: require("../assets/Entretenimento/Anime/O Castelo Animado.jpg"),
      titulo: "O Castelo Animado",
      descricao:  "Uma bruxa lança uma terrível maldição sobre a jovem Sophie transformando-a numa velha de 90 anos. Desesperada, ela embarca numa odisseia em busca do Castelo Andante, onde reside um misterioso feiticeiro que poderá ajudá-la a reverter o feitiço.",
    },
    {
      id:"3",
      imagem: require("../assets/Entretenimento/Anime/S11.jpg"),
      titulo: "Super Onze",
      descricao:  "Acompanhe Satoru Endo e o time de futebol da Escola Raimon na busca pela vitória.",
    },
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={produtos}
          renderItem={({item})=>
            <Cards 
                imagem={item.imagem}
                titulo={item.titulo}
                descricao={item.descricao}
            />
          }
          keyExtractor={item => item.id}
        />        
      </View>
    </ScrollView>
  );
}