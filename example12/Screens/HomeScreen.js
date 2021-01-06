import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProductosContext} from '../Context/ProductosContext';

const HomeScreen = ({navigation}) => {

    const {productos,agregar} = useContext(ProductosContext);

    return (
    
    <View style={styles.container}>
        <Header
            centerComponent={{ text: 'Mercado libre', style: { color: '#000', fontSize:20 } }}
            rightComponent={{ icon: 'shopping-cart', color: '#000', onPress:()=>{
                navigation.navigate('Carrito de compras')
           }}}
           containerStyle={{backgroundColor:'yellow'}}
        />
        <ScrollView>
        {
            
            productos.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='md-add-circle' size={30} color={'black'} onPress={()=>agregar(a,a.precio)}/>

                    </View>
                </ListItem>

            ))
            
        }


        </ScrollView>


    </View>
    );
}
 
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});