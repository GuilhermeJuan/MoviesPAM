import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Cards from './Cards';

export default function Serie(props) {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Entretenimento/Serie/OTBX.jpg"),
      titulo: "Outer Banks",
      descricao: "O jovem John convoca seus melhores amigos para procurarem por um tesouro ligado ao desaparecimento de seu pai. Aos poucos, o grupo vai entrando em uma perigosa trama de segredos e perigos.",
    },
    {
      id:"2",
      imagem: require("../assets/Entretenimento/Serie/Loki.jpg"),
      titulo: "Loki",
      descricao:  "Loki, Deus da Trapaça, sai da sombra de seu irmão para embarcar em uma aventura que ocorre após os eventos de Vingadores: Ultimato.",
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
