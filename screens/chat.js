import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, Octicons, Fontisto  } from '@expo/vector-icons';

export default function chat() {
  const arr = [
    {
      id: 1,
      img: 'caNauLau.jpg',
      name: 'Ca nấu lẩu, nấu mì mini',
      shopName: 'Devang'
    },
    {
      id: 2,
      img: 'khoGa.jpg',
      name: '1KG KHÔ GÀ BƠ TỎI',
      shopName: 'LTD Food'
    },
    {
      id: 3,
      img: 'xe.jpg',
      name: 'Xe cần cẩu đa năng',
      shopName: 'Thế giới đồ chơi'
    },
    {
      id: 4,
      img: 'moHinh.jpg',
      name: 'Đồ chơi dạng mô hình',
      shopName: 'Thế giới đồ chơi'
    },
    {
      id: 5,
      img: 'lanhDaoGianDon.jpg',
      name: 'Lãnh đạo giản đơn',
      shopName: 'Minh Long Book'
    },
    {
      id: 6,
      img: 'hieuLongConTre.jpg',
      name: 'Hiểu lòng con trẻ',
      shopName: 'Minh Long Book'
    },
    {
      id: 7,
      img: 'tongThongMy.jpg',
      name: 'Donald Trump-Thiên tài lãnh đạo',
      shopName: 'Minh Long Book'
    }
  ]
  return (
    <View style={styles.container} >
      <View style={styles.body}>
        <View style={{ width: '85%', marginTop: 17, marginBottom: 12 }}>
          <Text style={styles.support}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
        </View>
        <View style={{ width: '100%', height: 500 }}>
          <ScrollView>
            <FlatList
              data={arr}
              renderItem={({ item }) =>
                <View style={styles.item}>
                  <Image style={styles.img} source={require(`../assets/${item.img}`)} />
                  <View style={styles.text}>
                    <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                    <Text style={styles.name}>Shop <Text style={[styles.name, { color: '#FF0E0E' }]}> {item.shopName}</Text></Text>
                  </View>
                  <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Chat</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              }
            />
          </ScrollView>
        </View>
      </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
  },
  support: {
    fontSize: 16,
    fontWeight: 600,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 3
  },
  img: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  text: {
    width: '40%',
  },
  name: {
    fontSize: 18,
  },
  viewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: '100%',
  },
  button: {
    width: '80%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F31111'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    justifyContent: 'space-around',
  }
});