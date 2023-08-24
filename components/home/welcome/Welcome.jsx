import { useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';


const jobTypes = ["Tempo integral", "Meio-período", "Freelancer"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Tempo integral')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Olá, Isaque!</Text>
        <Text style={styles.welcomeMessage}>Encontre seu emprego dos sonhos</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
            placeholder='O que você está procurando?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => (

            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >

              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Welcome