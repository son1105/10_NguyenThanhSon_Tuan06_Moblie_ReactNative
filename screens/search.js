import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings';
import { SimpleLineIcons, Octicons, Fontisto  } from '@expo/vector-icons';

export default function search() {
  const data = [
    {
      id: 1,
      img: 'cap1.jpg',
      name: 'Cáp chuyển từ Cổng USB sang PS2',
      rating: {
        star: 4,
        count: 15
      },
      price: 69900,
      discount: 39
    },
    {
      id: 2,
      img: 'cap2.jpg',
      name: 'Cáp chuyển từ Cổng USB sang PS2',
      rating: {
        star: 4,
        count: 15
      },
      price: 69900,
      discount: 39
    },
    {
      id: 3,
      img: 'cap3.jpg',
      name: 'Cáp chuyển từ Cổng USB sang PS2',
      rating: {
        star: 4,
        count: 15
      },
      price: 69900,
      discount: 39
    },
    {
      id: 4,
      img: 'cap4.jpg',
      name: 'Cáp chuyển từ Cổng USB sang PS2',
      rating: {
        star: 4,
        count: 15
      },
      price: 69900,
      discount: 39
    },
    {
      id: 5,
      img: 'cap5.jpg',
      name: 'Cáp chuyển từ Cổng USB sang PS2',
      rating: {
        star: 4,
        count: 15
      },
      price: 69900,
      discount: 39
    },
    {
      id: 6,
      img: 'cap6.jpg',
      name: 'Cáp chuyển từ Cổng USB sang PS2',
      rating: {
        star: 4,
        count: 15
      },
      price: 69900,
      discount: 39
    }
  ]
  return (
    <View style={{width:'100%', alignItems:'center'}}>
      <FlatList
        style={{width: '90%', marginTop: 20,flex: 10}}
        data={data}
        numColumns={2}
        renderItem={({ item }) =>
          <View style={styles.item}>
            <Image style={styles.img} source={require(`../assets/${item.img}`)} />
            <Text style={[styles.text,{marginLeft:'10%', width:'80%', fontWeight:400}]}>{item.name}</Text>
            <View style={{marginLeft:'10%', flexDirection:'row', justifyContent:'space-between', width:'70%'}}>
            <Rating
              imageSize={15}
              readonly
              startingValue={item.rating.star}
            />
            <Text style={styles.text}>({item.rating.count})</Text>
            </View>
            <View style={[styles.text,{flexDirection:'row', marginLeft:'10%', justifyContent:'space-between', width:'60%'}]}>
              <Text style={[styles.text,{fontWeight:700}]}>{item.price} đ</Text>
              <Text style={[styles.text,{color: '#969DAA', fontWeight:400}]}>-{item.discount}%</Text>
            </View>
          </View>
        }
      />
      <View style={styles.footer}>
        <TouchableOpacity style={{ width: '33%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <SimpleLineIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '33%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Octicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '33%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Fontisto name="arrow-return-left" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    width: '50%',
    marginTop: 20,
  },
  img: {
    width: 155,
    height: 90,
    alignSelf:'center'
  },
  text:{
    fontSize: 12
  },
  footer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    justifyContent: 'space-around',
  }
})