import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Cards from './Cards';

export default function Filme(props) {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Entretenimento/Filme/Boyhood.jpg"),
      titulo: "Boyhood: Da Infância à Juventude",
      descricao: "Acompanhe a vida do garoto Mason durante um período de doze anos, da infância à juventude, analisando seu relacionamento com os pais, suas descobertas, experiências e seus conflitos.",
    },
    {
      id:"2",
      imagem: require("../assets/Entretenimento/Filme/Flash.jpg"),
      titulo: "Flash",
      descricao:  "Os mundos colidem quando Flash viaja no tempo para mudar os eventos do passado. No entanto, quando sua tentativa de salvar sua família altera o futuro, ele fica preso em uma realidade na qual o General Zod voltou, ameaçando a aniquilação.",
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
