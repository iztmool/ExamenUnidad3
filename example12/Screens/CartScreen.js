import React, { useContext} from "react";
import { View, StyleSheet,Text , ScrollView} from "react-native";
import {ListItem,Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProductosContext} from '../Context/ProductosContext';

const CartScreen = () => {
    const {carro,total,eliminar,setCarro,setTotal}= useContext(ProductosContext);

    const clear =()=>{
        setCarro({})
        setTotal(0)
    }
    return (
        <View style={styles.container}>
            <ScrollView>
        {
            carro.length>0
            ?
            carro.map((a,i)=>(
                <ListItem key={i} bottomDivider style={{marginTop:10, textAlign:'center', fontSize:20, width:400}}>
                    <ListItem.Content style={{width:300}}>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View >
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(i,a.precio)}/>
                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay productos {carro.size}</Text>


        }
        <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>Total: ${(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>

        <Button
            buttonStyle={styles.buttons}
            onPress={clear}
            title="Comprar"
        />

        </ScrollView>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    },
    buttons:{
        backgroundColor:'yellow', 
        color:'black', 
        marginTop:10, 
        borderRadius:10,
        width:300
      },
      header:{
        fontSize:20, 
        textAlign:'center', 
        marginBottom:40
      },
  });
  