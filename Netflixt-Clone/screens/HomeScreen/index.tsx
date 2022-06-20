import { FlatList, View } from "react-native";
import styles from "./styles";
import HomeCategory from "../../components/HomeCategory";
import categories from "../../assets/categories";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item}/>}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
